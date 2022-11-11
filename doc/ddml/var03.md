[Grįžti](index.md) <!-- markdownlint-disable-line MD041 -->

# Variantas 3. Metodų sintaksė

Elementų savybių reikšmės priskiriamos, iškviečiant savybes kaip elemento metodus

## Pavyzdys

```text
;; Metodų sintaksė
;; Tai - komentaras. ";;" prilygsta eilutės pabaigai. Visi simboliai tarp šio simbolių ir naujos eilutės ignoruojami
;; ";" užbaigia sakinį arba reiškinį, tuščius taip pat
;; Savybių ir reikšmių blokai neskiriami,
;; skliausteliai "(" ir ")" grupuoja elementus, taip pat ir esančius skirtingose eilutėse

!doctype.html
html.lang("en") (
    head (
        meta.charset("utf-8"); meta.name("viewport").content("width=device-width, initial-scale=10") ;; du elementai vienoje eilutėje
        meta ;; elementas tęsiamas kitoje eilutėje
            .name("description")
            .content("kdl is a document language, mostly based on SDLang, with xml-like semantics that looks like you're invoking a bunch of CLI commands!")
        title "kdl - Kat's Document Language"
        link.rel("stylesheet").href("/styles/globalcss")
    )
    body (
        main (
            header.class("py-10 bg-gray-300") (
              h1.class("text-4xl text-center") "kdl - Kat's Document Language"
            )
            section.class("kdl-section").id("description") (
                p (
                    "kdl is a document language, mostly based on "
                    a.href("https://sdlangorg") "SDLang"
                    " with xml-like semantics that looks like you're invoking a bunch of CLI commands"
                )
                p "It's meant to be used both as a serialization format and a configuration language, and is relatively light on syntax compared to XML"
            )
            section.class("kdl-section").id("design-and-discussion") (
                h2 "Design and Discussion"
                ;; elemento pavadinimas kabutėse; skirta nestandartiniams pavadinimams, kuriuose yra neleistinų simbolių
                -"p p" (
                    "kdl is still extremely new, and discussion about the format should happen over on the "
                    a.href("https://github.com/kdoclang/kdl/discussions") (

                        "discussions"
                    )
                    " page in the Github repo. Feel free to jump in and give us your 2 cents!"
                )
            )
            ;; "@" prieš tekstą reiškia klasę, "#" - id
            section @kdl-section #design-principles (
                h2 "Design Principles"
                ol (
                    li "Maintainability"
                    li "Flexibility"
                    li "Cognitive simplicity and Learnability"
                    li "Ease of de/serialization"
                    li "Ease of implementation"
                )
            )
        )
    )
)
```

[Grįžti](index.md)
