---
title: "LUMOS: distinguir la vida de la no-vida con orbitales frontera"
summary: "Un marco estadístico que examina las propiedades electrónicas de los aminoácidos de una muestra, según cuán abundante es cada uno, para evaluar si los produjo la vida."
coverAlt: "La expulsión del Jardín del Edén de Thomas Cole: un paraje oscuro y tormentoso a la izquierda y un paraíso soleado a la derecha, separados por un portal de roca"
art:
  title: "La expulsión del Jardín del Edén"
  artist: "Thomas Cole"
  year: "1828"
links:
  - label: "Preprint (arXiv)"
    url: https://arxiv.org/abs/2602.18490
---

## Trasfondo

Los aminoácidos son un objetivo clave en la búsqueda de vida más allá de la Tierra. Todo ser vivo que conocemos depende de ellos, pueden sobrevivir millones de años y la ciencia ha desarrollado instrumentación lo suficientemente sensible para detectarlos. La vida en la Tierra construye sus proteínas con 20 aminoácidos, y produce muchos más para funciones no enzimáticas.

Pero la vida no es la única fuente de aminoácidos. La química en el espacio y en planetas jóvenes también los produce. El material traído del asteroide Bennu, por ejemplo, contenía 33 aminoácidos, incluyendo 15 de los 20 que la vida usa para construir proteínas.

## El problema

Encontrar aminoácidos no basta. Necesitamos una manera de saber si los aminoácidos de una muestra los produjo la biología o la química por sí sola. Las pistas que existen, como su lateralidad (quiralidad) o sus isótopos, pueden borrarse con el tiempo por procesos físicos y químicos.

## La idea

<div data-demo-slot="hlg-definition"></div>

La manera en que reacciona una molécula depende de sus electrones, y dos de sus orbitales son los que más importan: el más alto que tiene electrones (el HOMO) y el más bajo que está vacío (el LUMO). La energía entre ambos, la brecha HOMO-LUMO, nos dice con qué facilidad una molécula comparte o reorganiza sus electrones. Una brecha pequeña indica una molécula más reactiva; una grande, una más estable.

<div data-demo-slot="orbital"></div>

La vida tiene que controlar cuándo, dónde y cómo ocurren sus reacciones químicas. Nuestra hipótesis es que la biología selecciona aminoácidos con propiedades electrónicas específicas para cumplir funciones específicas. De ser así, los aminoácidos de un sistema vivo deberían tener una gama de brechas HOMO-LUMO mucho más amplia que la que produce la química por sí sola. De ahí sale la tesis central de este trabajo: la distribución de las brechas HOMO-LUMO de los aminoácidos, ponderada por su abundancia, es una biofirma cuantitativa capaz de distinguir muestras de origen biológico de muestras abióticas en futuras misiones de detección de vida.

## Lo que hicimos

Recopilamos medidas de aminoácidos de 87 muestras de ambientes con vida, en 10 biomas y cuatro reinos; 102 muestras abióticas, incluyendo meteoritos, suelo lunar y asteroides; y 43 simulaciones de laboratorio de lugares como nubes interestelares, la Tierra primitiva, Marte, Europa y Titán. Luego calculamos con química cuántica la brecha HOMO-LUMO de cada uno de los 64 aminoácidos de la base de datos.

LUMOS (Life Unveiled via Molecular Orbital Signatures), desarrollado por primera vez en 2023, convierte esos números en una decisión. Pondera la brecha HOMO-LUMO de cada aminoácido según su abundancia en la muestra y luego usa estadística bayesiana, respaldada por un millón de simulaciones Monte Carlo, para estimar cuánta confianza podemos tener en que la muestra es biológica.

## Lo que encontramos

Las muestras abióticas contienen aminoácidos con brechas HOMO-LUMO notablemente uniformes. Las muestras biológicas contienen menos tipos de aminoácidos, pero sus brechas cubren casi el doble del rango, con preferencia por los de brecha más baja y más reactivos. Los aminoácidos con brechas menores de 10 eV aparecieron solo en muestras biológicas.

De las diez propiedades moleculares que comparamos, la brecha HOMO-LUMO fue la que mejor separó la vida de la no-vida. Usando solamente la dispersión de las brechas, LUMOS distingue muestras biológicas de abióticas con más de 95% de precisión en ambientes muy distintos.

Como LUMOS depende solo de las propiedades electrónicas de las moléculas, no depende del grupo particular de aminoácidos que usa la vida en la Tierra. Además, es compatible con instrumentos existentes, tanto para muestras traídas a la Tierra como para análisis en el lugar, desde róvers en Marte hasta futuras misiones a mundos oceánicos.

## Dónde está hoy

El artículo, *Distinguishing life from non-life via molecular frontier orbital energy gaps* (Ramírez-Colón, Ni y Carr), está disponible como preprint y en revisión en *Communications Chemistry*. Presenté el trabajo en AbGradCon 2025 y en la conferencia de la European Astrobiology Network Association de 2025 en Lisboa.

## Pruébalo (muy pronto)

Desarrollé una herramienta, con Claude Code, que permite a cualquier persona entrar los aminoácidos de su propia muestra y cuán abundante es cada uno. Usando la brecha HOMO-LUMO de cada aminoácido y el marco bayesiano y las simulaciones Monte Carlo detrás de LUMOS, la herramienta devuelve la evidencia sobre cuánta confianza podemos tener en que la muestra es biológica.

<!-- Añade el enlace cuando la herramienta sea pública. -->
