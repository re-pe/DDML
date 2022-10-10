[Atgal](../README.md) <!-- markdownlint-disable-line MD041 -->

# TeX (ConTeXt)

[TeX](https://en.wikipedia.org/wiki/TeX) ([ConTeXt](https://en.wikipedia.org/wiki/ConTeXt)) kalba

```tex
% This line is a comment because % precedes it.
% It specifies the format of head named 'title'
% Specifically the style of the font: sans serif
% + bold + big font.

\setuphead[title][style={\ss\bfd},
    before={\begingroup},
    after={John Doe, the author\smallskip%
           \currentdate\bigskip\endgroup}]

\starttext

\title{\CONTEXT}

\section{Text}
\CONTEXT\ is a document preparation system for the 
\TEX\ typesetting program. It offers programmable 
desktop publishing features and extensive 
facilities for automating most aspects of 
typesetting and desktop publishing, including 
numbering and cross-referencing (for example to 
equation \in[eqn:famous-emc]), tables and figures, 
page layout, bibliographies, and much more.

It was originally written around 1990 by Hans 
Hagen. It could be an alternative or complement 
to \LATEX.

\section{Maths}
With \CONTEXT\ we could write maths. Equations 
can be automatically numbered.

\placeformula[eqn:famous-emc]
\startformula
    E = mc^2
\stopformula
with
\placeformula[eqn:def-m]
\startformula
    m = \frac{m_0}{\sqrt{1-\frac{v^2}{c^2}}}
\stopformula

\stoptext
```

[Atgal](../README.md)
