---
title: "LUMOS: telling life from non-life with frontier orbitals"
summary: "A statistical framework that looks at the electronic properties of a sample’s amino acids, weighted by how abundant each one is, to judge whether life made them."
year: "2023–2026"
threads: [research]
cover: ../../../assets/work/lumos-project.jpg
coverAlt: "Thomas Cole’s Expulsion from the Garden of Eden: a dark, stormy wilderness on the left and a sunlit paradise on the right, divided by a rocky gateway"
featured: true
order: 1
demos: [hlg-definition, orbital]
art:
  title: "Expulsion from the Garden of Eden"
  artist: "Thomas Cole"
  year: "1828"
links:
  - label: "Preprint (arXiv)"
    url: https://arxiv.org/abs/2602.18490
---

## Background

Amino acids are a key target in the search for life beyond Earth. Every known living thing depends on them, they can survive for millions of years, and scientists have developed instrumentation sensitive enough to detect them. Life on Earth builds its proteins from 20 amino acids, and it makes many more for non-enzymatic functions.

But life is not the only source of amino acids. Chemistry in space and on young planets makes them too. Material returned from the asteroid Bennu, for example, contained 33 amino acids, including 15 of the 20 that life uses to build proteins.

## The problem

Finding amino acids is not enough. We need a way to tell whether the amino acids in a sample were made by biology or by chemistry alone. Existing clues, such as their handedness (chirality) or their isotopes, can be blurred over time by physical and chemical processes.

## The idea

<div data-demo-slot="hlg-definition"></div>

How a molecule reacts depends on its electrons, and two of its orbitals matter most: the highest one that holds electrons (the HOMO) and the lowest one that is empty (the LUMO). The energy between them, the HOMO-LUMO gap, tells us how readily a molecule shares or rearranges its electrons. A small gap means a more reactive molecule; a large gap, a more stable one.

<div data-demo-slot="orbital"></div>

Life has to control when, where, and how its chemical reactions happen. Our hypothesis is that biology selects amino acids with specific electronic properties to satisfy specific roles. If so, the amino acids in a living system should carry a much wider spread of HOMO-LUMO gaps than chemistry alone produces. That leads to the central thesis of this work: the abundance-weighted distribution of amino acid HOMO-LUMO gaps is a quantitative biosignature, able to tell samples of biological origin from abiotic ones in future life-detection missions.

## What we did

We compiled amino acid measurements from 87 samples of living environments, spanning 10 biomes and four kingdoms of life; 102 abiotic samples, including meteorites, lunar soil, and asteroids; and 43 laboratory simulations of places like interstellar clouds, the early Earth, Mars, Europa, and Titan. We then calculated the HOMO-LUMO gap of each of the 64 amino acids in the database using quantum chemistry.

LUMOS (Life Unveiled via Molecular Orbital Signatures), first developed in 2023, turns those numbers into a decision. It weighs each amino acid's HOMO-LUMO gap by how abundant it is in the sample, then uses Bayesian statistics, backed by a million Monte Carlo simulations, to estimate how confident we can be that the sample is biological.

## What we found

Abiotic samples contain amino acids with remarkably uniform HOMO-LUMO gaps. Biological samples contain fewer kinds of amino acids, but their gaps span nearly twice the range, with a preference for lower-gap, more reactive ones. Amino acids with gaps below 10 eV appeared only in biological samples.

Of the ten molecular properties we compared, the HOMO-LUMO gap separated life from non-life best. Using the spread of the gaps alone, LUMOS tells biological from abiotic samples with more than 95% accuracy across very different environments.

Because LUMOS relies only on the electronic properties of molecules, it does not depend on the particular set of amino acids that life on Earth happens to use. It is also compatible with existing instruments, for returned samples or for analyses on site, from Mars rovers to future missions to ocean worlds.

## Where it stands

The article, *Distinguishing life from non-life via molecular frontier orbital energy gaps* (Ramírez-Colón, Ni, and Carr), is available as a preprint and is under revision at *Communications Chemistry*. I presented the work at AbGradCon 2025 and at the 2025 European Astrobiology Network Association conference in Lisbon.

## Try it yourself (coming soon)

I built a tool, with Claude Code, that lets anyone enter the amino acids in their own sample and how abundant each one is. Using each amino acid's HOMO-LUMO gap and the Bayesian framework and Monte Carlo simulations behind LUMOS, it returns the evidence for how confident we can be that the sample is biological.

<!-- Add the link once the tool is public. -->
