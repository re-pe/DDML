<!-- markdownlint-disable-next-line MD041 -->
[Grįžti](../index-full.md)

# HTML -> KDL + Scribe

## Pagrindinės taisyklės

1. Viskas faile yra tekstas
2. Tekstas gali turėti skirsnius.
   1. Paprastieji skirsniai - tai ženklų sekos, sudarytis iš ženklų, tarp kurių nėra skiriamųjų `\n\r\t()[]{}<>"'` ir valdymo ženklų.
   2. Jeigu reikia, kad ženklas tekste neatliktų skiriamosios funkcijos, funkciją galima išjungti prie jį įterpiant kaitos ženklą `\`.
   3. Sudėtinius teksto skirsnius sudaro sudaro skirsnio kūnas ir jį įrėminanti ženklų pora.
   4. Ženklų poros
      1. `(` ir `)`
      2. `[` ir `]`
      3. `{` ir `}`
      4. `<` ir `>`
      5. `"` ir `"`
      6. `'` ir `'`
3. Skirsnis gali būti pažymėtas `@` ženklu prieš pat skirsnio pradžią arba ženklu `=` iš karto po skirsnio pabaigos.

## Papildomos taisyklės. Atributai. Elementai

1. Žymėtieji skirsniai pasibaigiantys `=` ženklu, vadinami raktais.
2. Raktas gali būti logiškai susietas su nežymėtu skirsniu. Toks siejinys vadinamas atributu.

    1. Raktas tampa atributo pavadinimu.
    2. Nežymetas skirstinys tampa atributo reikšme.
    3. Atributo pavadinimas turi eiti prieš atributo reikšmę.

    Schema:

        Atributas :– Raktas= Nežymėtas-skirsnis

3. Žymėtieji skirsniai prasidedantys `@` ženklu, vadinami tipais.
4. Vienas tipas, keletas atributų ir vienas nežymėtas sudėtinis skirsnis gali būti logiškai susieti. Toks siejinys vadinamas elementu.
    1. Tipas elemente turi eiti pirmas.
    2. Nežymėtas skirstinys tampa elemento turiniu.
    3. Atributai, įsiterpiantys tarp tipo ir turinio, arba esantys turinyje, tampa elemento atributais.
    4. Jeigu elemento dalis sudaro paprastieji skirsniai, jie turi būti atskirti tarpais arba kitais tuščios vietos (whitespace) ženklais.
    5. Elemento turinys `"` ir `'` ženklais gali būti įrėmintas tik tuo atveju, jeigu jo turinyje nėra kitų nepriklausančių elementams skirsnių, įrėmintų šiais ženklais.

    Schema:

        Elementas := Tipas (';' / (Atributas)* Turinys)
        Turinys := (Atributas / Elementas / Nežymėtas-skirsnis)+

### „Sintaksinis cukrus“

1. Jeigu elementas yra tuščias, jis gali būti užbaigtas `;` ženklu iš karto po tipo.
2. Jeigu elemento tipas ar atributo pavadinimas baigiasi tašku (`.`), elemento pabaiga yra pirmasis eilutės pabaigos ženklas.
3. Jeigu elemento tipas ar atributo pavadinimas baigiasi dviem taškais `..`, elemento pabaiga yra pirmoji tuščia eilutė (seka iš dviejų eilutės pabaigos ženklų, tarp kurių gali būti keletas tarpų ar tabuliacijos ženklų.)
4. Jeigu elemento tipas ar atributo pavadinimas baigiasi `/` ženklu, elemento pabaiga yra elemento tipas arba atributo pavadinimas, prieš kurį yra `/` ženklas, o po jo - kabliataškis (`;`). Elemento žymė „@“ eina prieš „/“ ženklą.

### Daugiau „sintaksinio cukraus“

Pirmas variantas, kai tekstą supa tarpai, antrasis - žodžio viduje.

1. Pajuodinimas

       1.  @strong"bcd"  =>  @b"bcd"  =>  **bcd** 
       2. a@strong"bcd"e => a@b"bcd"e => a"*bcd*"e => a[*bcd*]e

    Išvedimas:

    >   &nbsp;**bcd**
        a**bcd**e

2. Italikas

       1.  @em"bcd"  =>  @i"bcd"  =>  //bcd// 
       2. a@em"bcd"e => a@i"bcd"e => a"/bcd/"e => a[/bcd/]e

    Išvedimas:

    >   &nbsp;*bcd*
        a*bcd*e

3. Įterpimas (pabraukimas)

       1.  @ins"bcd"  =>  ++bcd++
       2. a@ins"bcd"e => a"+bcd+"e => a[+bcd+]e

    Išvedimas:

    >   &nbsp;<ins>bcd</ins>
        a<ins>bcd</ins>e

4. Išbraukimas (perbraukimas)

       1.  @del"bcd"  =>  --bcd--
       2. a@del"bcd"e => a"-bcd-"e => a[-bcd-]e

    Išvedimas:

    >   &nbsp;~~bcd~~
        a~~bcd~~e


5. Tekstas virš eilutės (superskriptas)

       1.  @sup"bcd"  =>   ^bcd^ 
       2. a@sup"bcd"e => a"^bcd^"e => a[^bcd^]e

    Išvedimas:

    >   <span style="text-decoration: overline underline line-through;">&ensp;</span>^bcd^
        A^bcd^e

6. Išbraukimas (perbraukimas)

       1.  @sub"bcd"  =>  __bcd__ 
       2. A@sub"bcd"e => a"_bcd_"e => a[_bcd_]e

    Išvedimas:

    >   <span style="text-decoration: overline underline line-through;">&ensp;</span>~bcd~
        A~bcd~e

7. Pažymėjimas

       1.  @mark"bcd"  =>  ==bcd== 
       2. a@mark"bcd"e => a"=bcd="e => a[=bcd=]e

    Išvedimas:

    >   &ensp;==bcd==
        a==bcd==e

8. Kodas eilutės viduje

       1.  @code"bcd"  =>  ``bcd``
       2. a@code"bcd"e => a"`bcd`"e => a[`bcd`]e

    Išvedimas:

    >   &ensp;`bcd`
        a`bcd`e

[Douglas Crockford apie Scribe](https://nofluffjuststuff.com/blog/douglas_crockford/2007/06/scribe)

Taip galėtų atrodyti puslapio aprašymas, jei KDL žymėjimo kalba būtų „sukryžminta“ su Scribe ir HTML.

```js
@!doctype html
@html/ lang="en"
    @head {
        @meta charset="utf-8"
        @meta name="viewport" content="width=device-width, initial-scale=1.0"
        @meta[
            name="description"
            content="kdl is a document language, mostly based on SDLang, with xml-like semantics that looks like you're invoking a bunch of CLI commands!"
        ]
        @title"kdl - Kat's Document Language"
        @link(rel="stylesheet" href="styles/global.css")
    }
    @body {
        @main {
            @header class="kdl-section py-10 bg-gray-300" {
                @h1. class="text-4xl text-center" kdl - Kat''s Document Language
            }
            @br;
            @section kdl-section #description {
                @p.. kdl is a document language, mostly based on 
                    @a href="https://sdlang.org"[SDLang]
                     with xml-like semantics that looks like you''re invoking a bunch of CLI commands
                
                It''s meant to be used both as a serialization format and a configuration language, and is relatively light on syntax compared to XML.

            }
            @section class="kdl-section" id="design-and-discussion" {
                @h2"Design and Discussion"
                @p {
                    kdl is still extremely new, and discussion about the format should happen over on the 
                    @a href="https://github.com/kdoclang/kdl/discussions" {
                        discussions
                    }
                     page in the Github repo. Feel free to jump in and give us your 2 cents!
                }
            }
            @section class=[kdl-section] id={design-principles} {
                @h2"Design Principles"
                @ol {
                    @li"Maintainability"
                    @li[Flexibility]
                    @li. Cognitive @b'simplicity' and @b"Learnability"
                    @li. Ease of @i'de'/serialization
                    @li. Ease of implementation
                }
            }
        }
    }
@/html;
```

[Grįžti](../index-full.md)
