[Atgal](../README.md) <!-- markdownlint-disable-line MD041 -->

# Variantas 7. Modifikuota PDML sintaksė

Pavyzdys pritaikant modifikuotą PDML kalbos sintaksę. Žymės prasideda "[" ir baigiasi "]" simboliais, žymės pavadinimas atskiriamas "|" simboliu

## Pavyzdys

```text
[; Modifikuota PDML sintaksė ;]
[; Tai - komentaras. Visi jo simboliai ignoruojami ;]
[; skliausteliai "[" ir "]" žymi mazgo pradžia ir pabaigą,
    "|" atskiria pavadinimą nuo savybių ir reikšmių,
    reikšmės, turinčios tarpų, išskiriamos kabutėmis " ;]

[!doctype| html]
[html|
    lang=en
    [head|
        [meta| charset=utf-8] [meta| name=viewport content="width=device-width, initial-scale=1.0"] ;; du elementai vienoje eilutėje
        [meta| ;; elementas tęsiamas kitoje eilutėje
             name=description
             content="kdl is a document language, mostly based on SDLang, with xml-like semantics that looks like you're invoking a bunch of CLI commands!"
        ]
        [title| kdl - Kat's Document Language]
        [link| rel=stylesheet href=/styles/global.css]
    ]
    [body|
        [main|
            [header| class="py-10 bg-gray-300"
                [h1| class=[text-4xl text-center] kdl - Kat's Document Language]
            ]
            [section| class=kdl-section id=description
                [p|
                    kdl is a document language, mostly based on
                    [a| href=https://sdlang.org SDLang]
                    with xml-like semantics that looks like you're invoking a bunch of CLI commands
                ]
                ;; Anoniminis paragrafas su tuščia eilute prieš ir po

                It's meant to be used both as a serialization format and a configuration language, and is relatively light on syntax compared to XML.

            ]
            [section| class=kdl-section id=design-and-discussion
                [h2| Design and Discussion]
                ;; elemento pavadinime gali būti tarpai ir kiti tuščios erdvės (whitespace) simboliai
                [p p|
                    kdl is still extremely new, and discussion about the format should happen over on the
                    [a| href=https://github.com/kdoclang/kdl/discussions
                        discussions
                    ]
                    page in the Github repo.[br|]Feel free to jump in and give us your 2 cents!
                ]
            ]
            ;; "@" simbolis žymi klasę, "#" simbolis - id
            [section| @kdl-section #design-principles
                [h2| Design Principles]
                [ol|
                    [li| Maintainability]
                    [li| Flexibility]
                    [li| Cognitive simplicity and Learnability]
                    [li| Ease of de/serialization]
                    [li| Ease of implementation]
                ]
            ]
        ]
    ]
]
```

[Atgal](../README.md)
