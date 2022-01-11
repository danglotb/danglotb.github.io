---
title: "A comprehensive study of pseudo-tested methods."
date: 2018-09-19
authors: "Oscar Luis Vera-Pérez, Benjamin Danglot, Martin Monperrus and Benoit Baudry"
tags: ["Software testing",
    "Software developers",
    "Pseudo-tested methods",
    "Test quality",
    "Program analysis"]
abstract: "Pseudo-tested methods are defined as follows: they are covered by the test suite, yet no test case fails when the method body is removed, i.e., when all the effects of this method are suppressed. This intriguing concept was coined in 2016, by Niedermayr and colleagues, who showed that such methods are systematically present, even in well-tested projects with high statement coverage. This work presents a novel analysis of pseudo-tested methods. First, we run a replication of Niedermayr’s study with 28K+ methods, enhancing its external validity thanks to the use of new tools and new study subjects. Second, we perform a systematic characterization of these methods, both quantitatively and qualitatively with an extensive manual analysis of 101 pseudo-tested methods. The first part of the study confirms Niedermayr’s results: pseudo-tested methods exist in all our subjects. Our in-depth characterization of pseudo-tested methods leads to two key insights: pseudo-tested methods are significantly less tested than the other methods; yet, for most of them, the developers would not pay the testing price to fix this situation. This calls for future work on targeted test generation to specify those pseudo-tested methods without spending developer time."
venue: "Empirical Software Engineering 24, 1195–1225 (2019). https://doi.org/10.1007/s10664-018-9653-2"
draft: false
link: "https://link.springer.com/article/10.1007/s10664-018-9653-2"
---