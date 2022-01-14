---
title: "Evaluating the “Small Scope Hypothesis”"
date: 2022-01-14
description: "Rather than testing fewer test inputs inside a large scope, the \"small scope hypothesis\" argues that testing exhaustively test input within a small scope would be more effective[12]. Andoni et al. evaluates this hypothesis using code coverage and mutation analysis on several benchmark in Java. If the hypothesis holds, it means that the generation of test inputs should be done exhaustively within a small scope rather than a large scope. In fact, enumerate all possible cases in a large scope is not practicable. They use the \"small scope hypothesis\" in the context of generating test input, for Java programs. In Java, test inputs are constructed from objects and literals, on which methods are invoked. Andoni et al. aim at generate all possible test inputs within a small, but sufficient, scope. To do this, they devise a tool names Korat. Korat is a technique that generate input from a given predicate and a bound for them. The predicate must be written developers, and describe acceptable inputs. In addition to this, developers must build a Finitization, which a specific (Java) object from Korat. In this object, the developer specify the size limit of each inputs, i.e. the number of objects for each classes that compose the test inputs. This Finitization creates the state space explorable by Korat, which is a \"small scope\". This scope is defined by the class domain and the field domain, which are respectively the set of objects from one class and the set of values for each fields. Korat then generate test inputs as follow: it uses a vector of indices. Each index are index of values inside class domain and the field domain. This vector is initialized with all zeros. Then, it call the predicate using this first values. During, this call, Korat monitors access of values inside the vector. This allows to prune the exploration, by only change accessed values during the predicate call. They evaluated Korat by studying the impact of the size of the scope on the code coverage and the mutation score on 9 Java classes. The main cons of this technique is that require that developers write manually the predicate and the Finitization."
draft: false
link: "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.63.9997"
---


Detecting near-duplicates for web crawling.



