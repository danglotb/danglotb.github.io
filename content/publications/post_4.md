---
title: "Automatic test improvement with DSpot: a study with ten mature open-source projects."
date: 2019-04-24
authors: "Benjamin Danglot, Oscar Luis Vera-Pérez, Benoit Baudry & Martin Monperrus "
tags: ["Test improvement",
    "Junit test",
    "Pull request empirical study"]
abstract: "In the literature, there is a rather clear segregation between manually written tests by developers and automatically generated ones. In this paper, we explore a third solution: to automatically improve existing test cases written by developers. We present the concept, design and implementation of a system called DSpot, that takes developer-written test cases as input (JUnit tests in Java) and synthesizes improved versions of them as output. Those test improvements are given back to developers as patches or pull requests, that can be directly integrated in the main branch of the test code base. We have evaluated DSpot in a deep, systematic manner over 40 real-world unit test classes from 10 notable and open-source software projects. We have amplified all test methods from those 40 unit test classes. In 26/40 cases, DSpot is able to automatically improve the test under study, by triggering new behaviors and adding new valuable assertions. Next, for ten projects under consideration, we have proposed a test improvement automatically synthesized by DSpot to the lead developers. In total, 13/19 proposed test improvements were accepted by the developers and merged into the main code base. This shows that DSpot is capable of automatically improving unit-tests in real-world, large scale Java software."
venue: "Empirical Software Engineering 24, 2603–2635 (2019). https://doi.org/10.1007/s10664-019-09692-y"
draft: false
link: "https://link.springer.com/article/10.1007/s10664-019-09692-y"
---