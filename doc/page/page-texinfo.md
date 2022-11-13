<!-- markdownlint-disable-next-line MD041 -->
[Grįžti](../index.md)

# GNU Texinfo

GNU Texinfo puslapio pavyzdys, sugeneruotas [`pandoc`](https://pandoc.org/)`--to texinfo` komanda.

```texinfo
@node Top
@top kdl - Kat's Document Language

@node kdl - Kat's Document Language
@chapter kdl - Kat's Document Language
@anchor{#kdl---kats-document-language}
kdl is a document language, mostly based on
@uref{https://sdlang.org,SDLang} with xml-like semantics that looks like
you're invoking a bunch of CLI commands

It's meant to be used both as a serialization format and a configuration
language, and is relatively light on syntax compared to XML.

@node Design and Discussion
@section Design and Discussion
@anchor{#design-and-discussion}
kdl is still extremely new, and discussion about the format should
happen over on the
@uref{https://github.com/kdoclang/kdl/discussions,discussions} page in
the Github repo. Feel free to jump in and give us your 2 cents!

@node Design Principles
@section Design Principles
@anchor{#design-principles}
@enumerate 
@item
Maintainability
@item
Flexibility
@item
Cognitive @strong{Simplicity} and @strong{Learnability}
@item
Ease of @emph{de}/serialization
@item
Ease of implementation
@end enumerate
```

[Grįžti](../index.md)
