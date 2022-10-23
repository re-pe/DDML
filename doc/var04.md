[Grįžti](index.md) <!-- markdownlint-disable-line MD041 -->

# Variantas 4. Pagrindinė sintaksė, invertuota

Sintaksėje išskiriamos ne turinio eilutės, bet elementų pavadinimai kaip įprasta žymėjimo kalbose.

Pagrindas - 1 variantas

## Pavyzdys

```text
$;; Invertuota pagrindinė sintaksė invertuota
$;; Tai - komentaras. "$;;" prilygsta eilutės pabaigai. Visi simboliai tarp šio simbolių ir naujos eilutės ignoruojami
$;; "$;" skiria sakinius ir savybes, tuščius taip pat
$;; skliausteliai "{" ir "}" žymi bloką savybių, taip pat ir esančių skirtingose eilutėse
$;; skliausteliai "[" ir "]" žymi bloką reikšmių, taip pat ir esančių skirtingose eilutėse

$!doctype {.html="true"}
$html {.lang="en"} [
    $head [
        $meta {.charset="utf-8"}$; $meta {.name="viewport"; .content="width=device-width, initial-scale=1.0"} $;; du elementai vienoje eilutėje
        $meta { $;; elementas tęsiamas kitoje eilutėje
            .name="description"
            .content="kdl is a document language, mostly based on SDLang, with xml-like semantics that looks like you're invoking a bunch of CLI commands!"
        }
        $title kdl - Kat's Document Language
        $link {.rel="stylesheet"; .href="/styles/global.css"}
    ]
    $body [
        $main [
            $;; vienas elementas įterptas į kitą vienoje eilutėje
            $header {.class="py-10 bg-gray-300"} $h1 {.class="text-4xl text-center"} kdl - Kat's Document Language
            $section {.class="kdl-section"; .id="description"} [
                $p [
                    kdl is a document language, mostly based on
                    $a {.href="https://sdlang.org"} SDLang
                    with xml-like semantics that looks like you're invoking a bunch of CLI commands
                ]
                $;; Anoniminis paragrafas su tuščia eilute prieš ir po

                It's meant to be used both as a serialization format and a configuration language, and is relatively light on syntax compared to XML.

            ]
            $section {.class="kdl-section"; .id="design-and-discussion"} [
                $h2 Design and Discussion
                $;; elemento pavadinimas kabutėse; skirta nestandartiniams pavadinimams, kuriuose yra neleistinų simbolių
                $"p p" [
                    kdl is still extremely new, and discussion about the format should happen over on the
                    $a {.href="https://github.com/kdoclang/kdl/discussions"} [
                        discussions
                    ]
                    page in the Github repo. Feel free to jump in and give us your 2 cents!
                ]
            ]
            $;; "@" simbolis žymi klasę, "#" simbolis - id
            $section@kdl-section#design-principles [
                $h2 Design Principles
                $ol [
                    $li Maintainability
                    $li Flexibility
                    $li Cognitive simplicity and Learnability
                    $li Ease of de/serialization
                    $li Ease of implementation
                ]
            ]
        ]
    ]
]
```

[Grįžti](index.md)
