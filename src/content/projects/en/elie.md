---
title: "ELIE, a life-detection instrument for icy ocean worlds"
summary: "An instrument that detects single molecules by the way they disturb a flow of electrons, built to search for amino acids, DNA, and RNA on Enceladus and Europa."
year: "2021–2026"
threads: [research, leadership]
cover: ../../../assets/work/elie-project.jpg
coverAlt: "Frederic Edwin Church’s The Icebergs: towering white and turquoise icebergs in a dim Arctic sea, with a broken ship’s mast in the foreground"
featured: true
order: 2
demos: [elie-instrument, nanogap-diagram, nanogap, conductance]
art:
  title: "The Icebergs"
  artist: "Frederic Edwin Church"
  year: "1861"
links:
  - label: "ELIE article (Astrobiology, 2023)"
    url: https://doi.org/10.1089/ast.2022.0119
  - label: "IEEE Aerospace article (2024)"
    url: https://doi.org/10.1109/AERO58975.2024.10521175
---

## Background

Saturn's moon Enceladus and Jupiter's moon Europa both hide liquid water oceans beneath their ice, which makes them some of the most promising places to search for life beyond Earth. Enceladus even sprays material from its interior into space through a plume of icy grains that a spacecraft could fly through and sample.

Life as we know it depends on amino acids, the building blocks of proteins, and on informational polymers such as DNA and RNA, which store genetic information. Both are natural targets for a life-detection instrument.

## The problem

If those molecules exist in an ocean world, they are likely to be extremely dilute, at the level of parts per billion or even parts per trillion. Why so little? An ocean is enormous, so anything dissolved in it is spread thin, and amino acids slowly break down over time. Based on how fast they degrade, finding amino acids in these oceans above about 1 nanomolar, less than 100 parts per trillion, would already point to something actively producing them, whether geochemistry or life.

So an instrument has to find molecules at those levels while also being small, light, and low in power, and tough enough to survive launch, vibration, and the conditions of space.

## What is ELIE

ELIE, the Electronic Life-detection Instrument for Enceladus/Europa, is a single-molecule detector designed to target amino acids and informational polymers like DNA and RNA. It grew out of a benchtop nanogap system developed at Osaka University, and our goal has been to make that technology small, light, and simple enough to fly.

The illustration below shows ELIE's first prototype: a low-noise amplifier, a laptop, and a Faraday cage holding the sensor, fastened to a single baseplate alongside two accelerometers.

<div data-demo-slot="elie-instrument"></div>

## How it works

At ELIE's heart is a nanogap. A tiny gold wire on a flexible chip is bent until it breaks, leaving two gold electrodes separated by a gap about the size of a single molecule.

<div data-demo-slot="nanogap-diagram"></div>

First, a small voltage makes electrons tunnel across the empty gap, creating a steady flow of current. Then, when a molecule drifts into the gap, it modulates that flow of electrons in a way that is related to its electronic properties. Each molecule leaves a short blip in the current, and the shape of that blip helps tell us what it was.

<div data-demo-slot="nanogap"></div>

## What we found

With our first compact prototype, we detected single molecules of the amino acid L-proline.

Early on, we showed a good correlation between the HOMO-LUMO gap of amino acids and the conductance they produce in the nanogap. That led us to propose that ELIE could measure the HOMO-LUMO gap indirectly.

<div data-demo-slot="conductance"></div>
 We also explored how the abundance patterns ELIE detects could help tell amino acids made by life from those made by chemistry alone.

## Taking it off the bench

The first prototype needed its gap adjusted by hand, which could only be sustained for short stretches. For the next version, we added an automated piezo actuator to control the gap in real time, then took ELIE on a parabolic flight aboard G-Force One. Across 20 parabolas, it detected single L-proline molecules under Mars gravity, lunar and Europa-like gravity, and microgravity, and kept a consistent performance and a stable gap as gravity changed. Electrical noise limited how much good data we could collect, which is one of the next things to improve on the way to a more mature instrument.

## My role

I am co-first author of the 2023 *Astrobiology* article introducing ELIE, and first author of the 2024 IEEE Aerospace Conference article on its flight test. I analyzed ELIE's single-molecule detection data from the ground and from parabolic flight, and assessed how changes in gravity affect nanogap sensing.

I also designed the cover of the issue of *Astrobiology* in which the ELIE article appeared (Volume 23, Number 10, October 2023), bringing together the nanogap, the amino acids it reads, and the worlds it was designed to explore.

![The October 2023 cover of Astrobiology, designed by José Luis: a nanogap between gold electrodes, a ring of amino acid structures, and Mars, Europa, and Enceladus on a black background](../../../assets/work/astrobiology-cover.jpg)

> Detecting life elsewhere may come down to reading individual molecules with enough confidence to say: this was made by biology.
