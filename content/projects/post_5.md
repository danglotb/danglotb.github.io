---
rank: 1
title: "Diff-JJoules"
date: 2020-11-22
tags: ["java", "sustainability", "continuous-integration"]
draft: false
repository: https://github.com/davidson-consulting/diff-jjoules
description: "Diff-jjoules is a tool to run in your continuous integration to measure the impact of commits on the energy consumption of the program"
license: "GPL-3.0 License"
---

# Diff-JJoules · [![tests](https://github.com/davidson-consulting/diff-jjoules/actions/workflows/main.yml/badge.svg)](https://github.com/davidson-consulting/diff-jjoules/actions/workflows/main.yml)  [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidson-consulting_diff-jjoules&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=davidson-consulting_diff-jjoules) [![codecov](https://codecov.io/gh/davidson-consulting/diff-jjoules/branch/main/graph/badge.svg?token=XH4Q36YMME)](https://codecov.io/gh/davidson-consulting/diff-jjoules)

`diff-jjoules` is a tool to be integrated in your continuous integration in order to 
* measure the impact of commits on the energy consumption of the program 
* break the build in case of an energy regression has been detected.

## Install

To use Diff-JJoules, you need to install [JJoules](https://github.com/davidson-consulting/j-joules) and [JUnit-JJoules](https://github.com/davidson-consulting/junit-jjoules).

Then, you can install `diff-jjoules`:

```sh
mvn clean install -DskipTest
```

## Usage

The easiest way to use `diff-jjoules`, you need to clone your project twice: one for the version before applying the 
commit, and one for the version after applying the commit. 
In the following, we consider **path/v1** as the path to the version of the program before applying the commit, and 
**path/v2** as the path to the version of the program after applying the commit.

You can run `diff-jjoules` with the following command line, from **path/v1**, where your `pom.xml` is:

```shell
mvn fr.davidson:diff-jjoules:diff-jjoules -Dpath-dir-second-version=path/v2
```

Calling this maven plugin will apply the whole process as follow:
InstrumentationStepTest
1. `test-selection`: select the tests that execute the code changes (this is done by `diff-test-selection`;
2. [`instrumention`](./doc/instrumentation.md): instrument the selected tests with probes to measure their energy consumption;
3. [`delta`](./doc/delta.md): computation of the energy consumption delta test-wise (&Delta;SEC(t) = SEC(v2,t) - SEC(v1,t));
4. [`mark`](./doc/mark.md): apply a strategy to mark as passing :heavy_check_mark: or failing :x: the commit;
5. [`failer`](./doc/failer.md): instrument the tests that have a positive &Delta, meaning that are consuming energy after applying the commit; 
6. [`suspect`](./doc/suspect.md): run fault localization to rate the modified line according to their suspiciousness;
7. [`report`](./doc/report.md): generate a readable report;

For more information, you can view a dedicated README for each step, however, we advise you to **not** run the steps
individually since they are made to work together.

`Diff-jjoules` offers an extra feature which the mutation of the source code in order to introduce artificial energy 
regression. Please, see the dedicated [`documentation`](./doc/mutation.md) for more information.

## Options

In this section, we list the options that are configurables.

:construction:

```text
Usage: fr.davidson.diff.jjoules.Main [-hV] [--junit4] [--mark] [--measure] [--suspect] -f=<pathToFirstVersion>
                                     [-i=<iterations>] [-o=<output>] [--path-report-file=<pathToReport>]
                                     [--path-repository-v1=<pathToRepositoryV1>]
                                     [--path-repository-v2=<pathToRepositoryV2>] [--report=<reportEnum>]
                                     -s=<pathToSecondVersion> [--wrapper=<wrapperEnum>]
  -f, --path-first-version=<pathToFirstVersion>
                          Path to the first version of the program.
  -h, --help              Show this help message and exit.
  -i, --iteration=<iterations>
                          Number of test executions to measure their energy consumption.
      --junit4            Enable junit4 tests
      --mark              Enable mark step.
      --measure           Enable the energy consumption measurements of Diff-JJoules Default value: false
  -o, --output=<output>   Path to the output folder.
      --path-report-file=<pathToReport>
                          Path to report file to produce.
      --path-repository-v1=<pathToRepositoryV1>
                          Path to the first version of the program that contains .git (this is used for multi-modu
                            projects)
      --path-repository-v2=<pathToRepositoryV2>
                          Path to the second version of the program that contains .git (this is used for multi-mod
                            projects)
      --report=<reportEnum>
                          Specify the report type to produce.Valid values: TXT, MARKDOWN, NONE Default value: TXT
  -s, --path-second-version=<pathToSecondVersion>
                          Path to the second version of the program.
      --suspect           Enable suspect step.
  -V, --version           Print version information and exit.
      --wrapper=<wrapperEnum>
                          Specify the wrapper to be used.Valid values: MAVEN, PROPERTIES Default value: MAVEN
```

## Contributing

If you have any questions, remarks, suggestions or bug reports, please do not hesitate to open an issue.
Diff-JJoules is licensed under GNU GPL.
Contributions and pull requests are very welcome :smiley:. 
For more information on contributing, see the dedicated [CONTRIBUTING.md](./CONTRIBUTING.md).