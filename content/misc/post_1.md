---
title: "Correctness Attraction: Live-Demo"
date: 2017-12-21
authors: "Benjamin Danglot, Philippe Preux, Benoit Baudry and Martin Monperrus"
tags: ["Perturbation analysis", "Software correctness", "Empirical study"]
description: "Correctness attraction is the phenomenon that a system is able to recover from changes injected into its state, which is called perturbations, and yet produce a correct output. Here, you can apply our protocol to an implementation of a quicksort algorithm. For every integer (literals and expressions), a perturbation consists to add 1 with a given probability. In the other hand, it does the same for boolean literals and expressions by negating them."
draft: false
abstract: "Can the execution of software be perturbed without breaking the correctness of the output? In this paper, we devise a protocol to answer this question from a novel perspective. In an experimental study, we observe that many perturbations do not break the correctness in ten subject programs. We call this phenomenon “correctness attraction”. The uniqueness of this protocol is that it considers a systematic exploration of the perturbation space as well as perfect oracles to determine the correctness of the output. To this extent, our findings on the stability of software under execution perturbations have a level of validity that has never been reported before in the scarce related work. A qualitative manual analysis enables us to set up the first taxonomy ever of the reasons behind correctness attraction."
venue: "Empirical Software Engineering 23, 2086–2119 (2018). https://doi.org/10.1007/s10664-017-9571-8"
link: "https://danglotb.github.io/resources/correctness-attraction/live-demo.html"
---