---
title: Microsoft's Threading Analyser
author: Matt McCorry
date: 2020-11-19
tags: C#,DotNet,Analysers
---

# Analysers

Analysers are compiler plugins that allow checking of source code, or more specifically the AST generated from the source code, and allow for code manipulation. Just like how ReSharper suggests you convert your loop into a Linq statement, but as of Roslyn the hooks are built into the compiler, as opposed to old ReSharper that used to do its own compilation in parallel.

## Microsoft.VisualStudio.Threading.Analyzers

Microsoft have their own threading analyser that they use internally. It provides a lot of useful hints when writing async code, just install the Nuget package, and it will start flagging up issues.

Word of warning, it is not a private package, so if you install it into project, all the other projects referencing that project will start getting useful async hints. This can become a headache if you build a Nuget with this package as a dependency, ask me how I know.

[Nuget](https://www.nuget.org/packages/Microsoft.VisualStudio.Threading.Analyzers/)
