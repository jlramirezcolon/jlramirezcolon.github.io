"""How to regenerate src/data/glycine-orbitals.json:
  1. Run ORCA on glycine.inp (prints the basis and MO coefficients) into a folder named print/.
  2. python3 evalmo.py 0.05   (isovalue in a.u.; needs numpy and scikit-image)
  3. Copy glycine-orbitals.json to src/data/.

Evaluate ORCA molecular orbitals on a grid from the printed basis set and MO coefficients,
then extract isosurfaces for the website. Sanity check: each MO must integrate to ~1."""
import re, json, math, sys
import numpy as np
from skimage.measure import marching_cubes

OUT = 'print/glycine.out'
ANG2BOHR = 1.8897261246
text = open(OUT).read()

# --- Geometry (Å) from the xyz used for the run
xyz = [l.split() for l in open('print/glycine.xyz').read().strip().splitlines()[2:]]
atoms = [(a[0], np.array(list(map(float, a[1:4])))) for a in xyz]

# --- Basis in input format: element -> list of (l, [(exp, coef), ...])
L = {'S': 0, 'P': 1, 'D': 2, 'F': 3}
basis_txt = text[text.index('BASIS SET IN INPUT FORMAT'):text.index('AUXILIARY/J BASIS SET IN INPUT FORMAT')]
basis = {}
for block in re.findall(r'NewGTO (\w+)\s*\n(.*?)end;', basis_txt, re.S):
    el, body = block
    shells, lines, i = [], body.strip().splitlines(), 0
    while i < len(lines):
        head = lines[i].split()
        l, n = L[head[0]], int(head[1])
        prims = [tuple(map(float, lines[i + 1 + k].split()[1:3])) for k in range(n)]
        shells.append((l, prims))
        i += n + 1
    basis[el] = shells

# --- Real solid harmonics r^l * Y_lm (orthonormal over the sphere), in ORCA's ordering and sign convention
def solid(l, x, y, z):
    r2 = x * x + y * y + z * z
    pi = math.pi
    if l == 0:
        return [np.full_like(x, 1 / math.sqrt(4 * pi))]
    if l == 1:
        c = math.sqrt(3 / (4 * pi))
        return [c * z, c * x, c * y]  # pz, px, py
    if l == 2:
        return [
            math.sqrt(5 / (16 * pi)) * (3 * z * z - r2),   # dz2
            math.sqrt(15 / (4 * pi)) * x * z,              # dxz
            math.sqrt(15 / (4 * pi)) * y * z,              # dyz
            math.sqrt(15 / (16 * pi)) * (x * x - y * y),   # dx2y2
            math.sqrt(15 / (4 * pi)) * x * y,              # dxy
        ]
    if l == 3:
        return [
            math.sqrt(7 / (16 * pi)) * z * (5 * z * z - 3 * r2),       # f0
            math.sqrt(21 / (32 * pi)) * x * (5 * z * z - r2),          # f+1
            math.sqrt(21 / (32 * pi)) * y * (5 * z * z - r2),          # f-1
            math.sqrt(105 / (16 * pi)) * z * (x * x - y * y),          # f+2
            math.sqrt(105 / (4 * pi)) * x * y * z,                     # f-2
            -math.sqrt(35 / (32 * pi)) * x * (x * x - 3 * y * y),      # f+3 (ORCA sign)
            -math.sqrt(35 / (32 * pi)) * y * (3 * x * x - y * y),      # f-3 (ORCA sign)
        ]

def radial_norm(l, prims):
    """Coefficients so that sum_i c_i r^l exp(-a_i r^2) is normalized radially (∫ R^2 r^2 dr = 1)."""
    a = np.array([p[0] for p in prims]); d = np.array([p[1] for p in prims])
    def S(ai, aj):
        return math.gamma(l + 1.5) / (2 * (ai + aj) ** (l + 1.5))
    prim_n = np.array([1 / math.sqrt(S(ai, ai)) for ai in a])  # normalize each primitive
    c = d * prim_n
    tot = sum(c[i] * c[j] * S(a[i], a[j]) for i in range(len(a)) for j in range(len(a)))
    return a, c / math.sqrt(tot)

# --- Basis functions in ORCA's order: per atom, all s shells, then p, d, f (each shell's m components)
functions = []  # (atom_index, l, exps, coefs, m_index)
for ai, (el, _) in enumerate(atoms):
    shells = basis[el]
    for l in range(4):
        for (sl, prims) in shells:
            if sl != l:
                continue
            a, c = radial_norm(l, prims)
            for m in range(2 * l + 1):
                functions.append((ai, l, a, c, m))
print('basis functions:', len(functions))

# --- MO coefficients
mo_txt = text[text.index('MOLECULAR ORBITALS (RHF, ROHF)'):]
mo_txt = mo_txt[:mo_txt.index('\n\n\n')] if '\n\n\n' in mo_txt else mo_txt
nbf = len(functions)
coef = {}
blocks = re.split(r'\n\s*\n', mo_txt)
lines = mo_txt.splitlines()
i = 0
while i < len(lines):
    hdr = lines[i].split()
    if hdr and all(h.isdigit() for h in hdr) and i + 3 < len(lines) and set(lines[i + 3].strip()) <= set('- '):
        idx = list(map(int, hdr))
        rows = lines[i + 4:i + 4 + nbf]
        for k, mo in enumerate(idx):
            # Fixed-width columns can run together (e.g. '0.971362-12.430161'), so match numbers by format.
            vals = [re.findall(r'-?\d+\.\d{6}', re.sub(r'^\s*\d+[A-Z][a-z]?\s+\S+', '', r)) for r in rows]
            coef[mo] = np.array([float(v[k]) for v in vals])
        i += 4 + nbf
    else:
        i += 1
print('MOs read:', len(coef))

def evaluate(mo, grid_pts):
    """grid_pts: (N,3) in Å. Returns psi (N,) in a.u."""
    c = coef[mo]
    psi = np.zeros(len(grid_pts))
    for f, (ai, l, a, cc, m) in enumerate(functions):
        if abs(c[f]) < 1e-6:
            continue
        d = (grid_pts - atoms[ai][1]) * ANG2BOHR
        x, y, z = d[:, 0], d[:, 1], d[:, 2]
        r2 = x * x + y * y + z * z
        radial = np.zeros_like(r2)
        for ak, ck in zip(a, cc):
            radial += ck * np.exp(-ak * r2)
        psi += c[f] * radial * solid(l, x, y, z)[m]
    return psi

# --- Grid around the molecule
pos = np.array([p for _, p in atoms])
margin, h = 4.5, 0.16  # Å
lo, hi = pos.min(0) - margin, pos.max(0) + margin
axes = [np.arange(lo[k], hi[k] + h, h) for k in range(3)]
G = np.stack(np.meshgrid(*axes, indexing='ij'), -1)
shape = G.shape[:3]
pts = G.reshape(-1, 3)
dV = (h * ANG2BOHR) ** 3

result = {'atoms': [{'el': el, 'p': [round(v, 4) for v in p]} for el, p in atoms]}
iso = float(sys.argv[1]) if len(sys.argv) > 1 else 0.05
for name, mo in (('homo', 19), ('lumo', 20)):
    psi = evaluate(mo, pts)
    print(f'{name} (MO {mo}): ∫ψ² dV = {np.sum(psi * psi) * dV:.4f}')
    vol = psi.reshape(shape)
    lobes = {}
    for sign, label in ((1, 'pos'), (-1, 'neg')):
        if (sign * vol).max() < iso:
            lobes[label] = {'v': [], 'f': []}
            continue
        verts, faces, _, _ = marching_cubes(sign * vol, level=iso, spacing=(h, h, h))
        verts += lo
        lobes[label] = {'v': np.round(verts, 3).flatten().tolist(), 'f': faces.flatten().tolist()}
        print(f'  {label}: {len(verts)} vertices, {len(faces)} triangles')
    result[name] = lobes
json.dump(result, open('glycine-orbitals.json', 'w'), separators=(',', ':'))
print('wrote glycine-orbitals.json', round(len(open('glycine-orbitals.json').read()) / 1024), 'KB')
