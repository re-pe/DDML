[Atgal](../README.md) <!-- markdownlint-disable-line MD041 -->

# Variantas 1. Pagrindinė sintaksė

DDML kodas

``` text
    header {.class="py-10 bg-gray-300"} (
      h1 {.class="text-4xl text-center"} ("kdl - Kat's Document Language")
    )
```

atitinka JavaScript'o kodą

```text
    //Header ir H1 - objektų konstruktoriai

    let header = Header(...) // numatytosios savybių ir turinio reikšmės
    let h1 = H1(...)

    var tempH1 = structuredClone(h1)
    with(tempH1){
      class = "text-4xl text-center"
      values = [...values, "kdl - Kat's Document Language"]
    }

    var tempHeader = structuredClone(header)
    with(tempHeader) {
      $ = [...values, tempH1]
    }
```

## Pavyzdys

```text
;; Pagrindinė sintaksė
;; Tai - komentaras. ";;" prilygsta eilutės pabaigai. Visi simboliai tarp šių simbolių ir naujos eilutės ignoruojami
;; ";" skiria sakinius, tuščius taip pat
;; skliausteliai "{" ir "}" žymi savybių bloką
;; skliausteliai "(" ir ")" žymi turinio bloką

!doctype {.html="true"}
html {.lang="en"} (
    head (
        meta {.charset="utf-8"}; meta {.name="viewport"; .content="width=device-width, initial-scale=1.0"}
        meta { ;; elementas tęsiamas kitoje eilutėje
            .name="description"
            .content="kdl is a document language, mostly based on SDLang, with xml-like semantics that looks like you're invoking a bunch of CLI commands!"
        }
        title ("kdl - Kat's Document Language")
        link {.rel="stylesheet"; .href="/styles/global.css"}
    )
    body (
        main (
            header {.class="py-10 bg-gray-300"} (
                h1 {.class="text-4xl text-center"} ("kdl - Kat's Document Language")
            )
            section {.class="kdl-section"; .id="description"} (
                p (
                    "kdl is a document language, mostly based on "
                    a {.href="https://sdlang.org"} ("SDLang")
                    " with xml-like semantics that looks like you're invoking a bunch of CLI commands"
                )
                p ("It's meant to be used both as a serialization format and a configuration language, and is relatively light on syntax compared to XML.")
            )
            section {.class="kdl-section"; .id="design-and-discussion"} (
                h2 ("Design and Discussion")
                p (
                    "kdl is still extremely new, and discussion about the format should happen over on the "
                    a {.href="https://github.com/kdoclang/kdl/discussions"} (
                        "discussions"
                    )
                    " page in the Github repo. Feel free to jump in and give us your 2 cents!"
                )
            )
            section {.class="kdl-section"; .id="design-principles"} (
                h2 ("Design Principles")
                ol (
                    li ("Maintainability")
                    li ("Flexibility")
                    li ("Cognitive simplicity and Learnability")
                    li ("Ease of de/serialization")
                    li ( "Ease of implementation")
                )
            )
        )
    )
)
```

[Atgal](../README.md)
