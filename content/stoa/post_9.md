---
title: "Shadow Symbolic Execution with Java PathFinder"
date: 2022-01-14
description: "The authors aim at detecting regression bug. To This, the authors apply the shadow symbolic execution, original from Palikevera with the shadowKLEE for C program, on JAVA program. Shadow symbolic execution generate test inputs that trigger the new program behavior. To this, it uses a merged version of the both version of the same program, i.e. the previous version, so called old, and the changed version, called new. This done by instrumenting the code with annotation as method calls change(). The method change() takes two inputs: the old statement and the new one. Then, it uses two steps: 1) the concoic phase. This step collects divergence points, i.e. conditional where the old version and the new version does not take the same branch, e.g. for a given conditional, the old version takes the then branch and the new version takes the else branch. Then the bounded symbolic execution, a.k.a. BSE. "
draft: false
link: "https://dl.acm.org/citation.cfm?id=3149492"
---