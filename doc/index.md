<!-- markdownlint-disable-next-line MD041 -->
[Pradžia](../index.md)

<style>
    img {
        background-color: white !important;
        height: 1rem;
    }
</style>

# Žymėjimo kalbos

[Žymėjimo kalbos](https://en.wikipedia.org/wiki/Markup_language) – tai teksto kodavimo sistemos, sudarytos iš simbolių rinkinio, įterpiamo į tekstinį dokumentą ir koduojančio instrukcijas, skirtas perteikti dokumento saugomą informaciją kitose terpėse arba kitokiu pavidalu. Žymėjimo kalba – tai taisyklių rinkinys, reglamentuojantis, kokius žymenis galima įtraukti į dokumentą, kad būtų galima lengviau suvokti ir apdoroti jo informaciją.

Žmogiškos žymėjimo kalbos – tai žmogui lengvai perskaitomos (*human readable*) sistemos, saugančios informaciją tekstinio dokumento pavidalu.

* [Bendros paskirties žymėjimo kalbos](https://en.wikipedia.org/wiki/General-purpose_markup_language) – tai žymėjimo kalbos, naudojamos daugiau nei vienam tikslui ar atvejui. Dažnai šiomis kalbomis grindžiamos kitos, labiau specializuotos konkrečios srities žymėjimo kalbos. Pavyzdžiui, HTML 5 ir ankstesnės HTML standarto versijos yra konkrečios srities žymėjimo kalbos, skirtos tinklalapiams kurti, ir yra grindžiamos SGML – bendrosios paskirties žymėjimo kalbos – sintakse.

* [Serializacijos formatai](https://en.wikipedia.org/wiki/Serialization#Serialization_formats) – tai taisyklių rinkiniai, apibrėžiantys duomenų struktūrų arba objektų būsenų pavidalus, tinkamus įrašyti saugojimo įrenginiuose ar perduoti tinklais tam, kad vėliau tas duomenų struktūras ar objektus būtų galima atkurti.
  
    [Serializacijos formatų palyginimas](https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats)

* [Dokumentų žymėjimo kalbos](https://en.wikipedia.org/wiki/List_of_document_markup_languages) – tai žymėjimo kalbos, naudojamos valdyti dokumento struktūrai, formatavimui, sąryšiams tarp jo dalių arba papildyti jį žymėmis, kad būtų lengviau jį automatizuotai apdoroti ar atvaizduoti. Dokumentų žymėjimo kalbos nurodo, kokios žymės turi būti įterpiamos ir kaip jos turi būti derinamos su dokumento turiniu, kad žmonėms ir kompiuterių programoms būtų lengviau juo naudotis. Tokio žymėjimo idėja ir terminija išsivystė iš popierinių rankraščių žymėjimo (t. y. redagavimo instrukcijų) tradicijos, kai redaguojami rankraščiai buvo žymimi raudonu rašikliu arba mėlynu pieštuku.
  * [Visavertės](index-full.md) – tinkamos visai puslapio struktūrai, taip pat ir nematomais elementais, aprašyti. Dažnai tam tikslui naudojamos bendros paskirties žymėjimo kalbos
  * [Paprastos](index-lightweight.md) – tinkamos aprašyti tik dažniausiai naudojamiems vizualianiams elementams

## Žymėjimo kalbos ir serializacijos formatai

* [RUNOFF][wiki:runoff], 1964
    Viena iš pirmųjų plačiai naudotų teksto formatavimo programų CTSS operacinei sistemai
  * [roff][wiki:roff], 1970
    Pirmoji teksto formatavimo kompiuterinė programa Unix'ui. Multics'o teksto formatavimo programos runoff versija. CTSS'o programos *RUNOFF* palikuonė. Dokumentų apdorojimo sistemų *nroff* ir *troff* pirmtakė
    [`Puslapio kodas`][page:roff]
    * [troff][wiki:troff], 1971
    "Typesetter roff" - roff su teksto atvaizdavimo komandomis. Didelis komopnentas dokumentų apdoprojimo sistemos, sukurtos Bell Labs Unix operacinei sistemai.
    [man][wiki:man] puslapių formatas, 1971
* [TeX][wiki:tex], 1978
    Typesetting system, designed with two main goals in mind: (1) to allow anybody to produce high-quality books with minimal effort, and (2) to provide a system that would give exactly the same results on all computers, at any point in time
  * [LaTeX][wiki:latex], 1984
    A software system for document preparation. The original vision of LaTeX is to insulate the user from typographical decisions — a useful approach for submitting e.g. articles for a scientific journal.
    [`Puslapio kodas`][page:latex], [`kodas iš Wikipedijos`][wiki-page:latex]
  * [ConTeXt][wiki:context], 1991
    A general-purpose document processor. A typography and typesetting system meant to provide users easy and consistent access to advanced typographical control—important for general-purpose typesetting tasks.
    [`Puslapio kodas`][page:context], [`kodas iš Wikipedijos`][wiki-page:context]
* [Scribe][wiki:scribe], 1978
    Žymėjimo kalba ir teksto apdorojimo sistema, kurioje pirmąkart panaudotas [aprašomasis žymėjimas][wiki:descr-markup]
    [Douglas Crockfordas apie Scribe][cite:crock]
    [`Kodo pavyzdžiai`][sample:scribe], [`puslapio kodas`][page:scribe]
  * [GNU Texinfo][wiki:texinfo], 1984
      Teksto rinkimo (typesetting) sintaksė, naudojama internetinei ir spausdintinei dokumentacijai kurti. Sintaksė primena Scribe. Grindžiama Emacs pagalbos žinynu Info (man failais su hypertext nuorodomis) – bei TeX.
      [`Puslapio kodas`][page:texinfo]
* [SCRIPT][wiki:script], 1968+
    IBM teksto formatavimo procesorius
  * [GML][wiki:gml], 1969
      Macros'ų rinkinys, įdiegiantis ketinimais pagrįstas (procedūrines) žymėjimo žymes, skirtas IBM teksto formatavimo procesoriui SCRIPT.
      [`Kodo pavyzdys`][sample:gml]
    * [SGML][wiki:sgml], 1986
        Dokumentų žymėjimo kalbų kūrimo standartas.
      * [HTML], 1991
        Standartinė dokumentų, skirtų atvaizduoti naršyklėse, žymėjimo kalba.
      * [DocBook][wiki:docbook], 1991
        Semantinė kalba techninei dokumentacijai žymėti. Leidžia kurti dokumentus nepriklausomai nuo atvaizdavimo būdo nustatant loginę turinio struktūrą; turinys vėliau gali būti publikuotas įvairiais formatais.
      * [LinuxDoc][wiki:linuxdoc], 1994
        SGML DTD'as, panašus į DocBook'ą. Naudojamas [LDP][wiki:ldp]
      * [XML][wiki:xml], 1996
        Bendrosios paskirties kalba ir serializacijos formatas. Griežtesnis SGML'o poaibis
        * [XHTML][wiki:xhtml], 2000
          Visavertė dokumentų žymėjimo kalba. XML'o pritaikymas HTML'ui.
        * [XAML][wiki:xaml], 2008
          Deklaratyvi, XML'u grindžiama kalba, sukurta Microsofto korporacijoje struktūrinių reikšmių ir objektų inicializavimui.
          [`Vartotojo sąsajos pavyzdys`][ui-sample:xaml]
* [S-expressions][wiki:s-exp], 1997
    Sintaksė, pagrįsta Lisp S-išraiškomis, tačiau skirta ne programų kodo rašymui, o bendros paskirties duomenų saugojimui ir keitimuisi (panašiai kaip XML).
    [`Puslapio kodas`][page:s-exp]

Kita

* [QML][wiki:qml], 2009
    A user interface markup language
    [`Puslapio kodas`][page:qml]
* [EDN][wiki:edn], 2007
    Extensible Data Notation.
* [XUPL][home:xupl], 2011
    Žmogui įskaitomas duomenų formatas, sukurtas kaip struktūrinis XML ekvivalentas, išoriškai panašus į C stiliaus programavimo kalbas.

[Serializacijos formatų palyginimas](https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats)

* [DSV](https://en.wikipedia.org/wiki/Delimiter-separated_values)
  * [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)
  * [TSV](https://en.wikipedia.org/wiki/Tab-separated_values)
* [JSON](https://www.json.org/json-en.html)
  * [JSON5](https://json5.org/)
* [AXON](https://pyaxon.readthedocs.io/en/latest/)
* [YAML](https://yaml.org/spec/1.2.2/)
* [SDL](https://sdlang.org/)

[cite:crock]: <https://nofluffjuststuff.com/blog/douglas_crockford/2007/06/scribe>
[home:xupl]: <https://github.com/uplang/xupl/wiki>
[page:context]: <page/page-context.md>
[page:latex]: <page/page-latex.md>
[page:qml]: <page/page-qml.md>
[page:roff]: <page/page-roff.md>
[page:s-exp]: <page/page-sexp.md>
[page:scribe]: <page/page-scribe.md>
[page:texinfo]: <page/page-texinfo.md>
[sample:gml]: <misc/sample-gml.md>
[sample:scribe]: <misc/sample-scribe.md>
[ui-sample:xaml]: <data-series/ui-data-xaml.md>
[wiki-page:context]: <page/wiki-context.md>
[wiki-page:latex]: <page/wiki-latex.md>
[wiki:context]: <https://en.wikipedia.org/wiki/ConTeXt>
[wiki:descr-markup]: <https://en.wikipedia.org/wiki/Markup_language#Descriptive_markup>
[wiki:docbook]: <https://en.wikipedia.org/wiki/DocBook>
[wiki:edn]: <https://en.wikipedia.org/wiki/Clojure#Extensible_Data_Notation>
[wiki:gml]: <https://en.wikipedia.org/wiki/IBM_Generalized_Markup_Language>
[wiki:latex]: <https://en.wikipedia.org/wiki/LaTeX>
[wiki:ldp]: <https://en.wikipedia.org/wiki/Linux_Documentation_Project>
[wiki:linuxdoc]: <https://en.wikipedia.org/wiki/LinuxDoc>
[wiki:man]: <https://en.wikipedia.org/wiki/Man_page>
[wiki:qml]: <https://en.wikipedia.org/wiki/QML>
[wiki:roff]: <https://en.wikipedia.org/wiki/Roff_(software)>
[wiki:runoff]: <https://en.wikipedia.org/wiki/TYPSET_and_RUNOFF>
[wiki:s-exp]: <https://en.wikipedia.org/wiki/S-expression>
[wiki:scribe]: <https://en.wikipedia.org/wiki/Scribe_(markup_language)>
[wiki:script]: <https://en.wikipedia.org/wiki/SCRIPT_(markup)>
[wiki:sgml]: <https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language>
[wiki:tex]: <https://en.wikipedia.org/wiki/Texinfo>
[wiki:texinfo]: <https://en.wikipedia.org/wiki/Texinfo>
[wiki:troff]: <https://en.wikipedia.org/wiki/Roff_(software)>
[wiki:xaml]: <https://en.wikipedia.org/wiki/Extensible_Application_Markup_Language>
[wiki:xhtml]: <https://en.wikipedia.org/wiki/XHTML>
[wiki:xml]: <https://en.wikipedia.org/wiki/XML>

*[RUNOFF]: RUNOFF, 1964
*[roff]: roff, 1970
*[Unix]: Daugiaužduotinių ir daugiafunkcinių kompiuterių operacinių sistemų šeima. 1969+
*[Multics]: Multiplexed Information and Computing Service – operacinė paskirstyto laiko sistema, padariusi įtaką OS raidai. 1969+
*[runoff]: CTSS'o programos RUNOFF variantas Mutics'e, ~1969
*[CTSS]: Compatible Time-Sharing System, pirmoji bendrosios paskirties laiko paskirtsymo operacinė sistema. 1961
*[troff]: "Typesetter roff" (roff su teksto atvaizdavimo komandomis), 1971
*[man]: Unix manual, 1971
*[Scribe]: Scribe, 1978
*[TeX]: TeX, 1978
*[LaTeX]: LaTeX, 1984
*[ConTeXt]: ConTeXt, 1991
*[Texinfo]: GNU Texinfo, 1984
*[GML]: Generalized Markup Language, 1969
*[IBM]: International Business Machines Corporation
*[SCRIPT]: IBM'o teksto apdorojimo procesorius ir jo žymėjimo kalba, 1968+
*[SGML]: Standard Generalized Markup Language, 1986
*[DocBook]: Document Book – semantinė kalba techninei dokumentacijai žymėti, 1991
*[LinuxDoc]: Linux'o dokumentas, 1994
*[DTD]: Document type definition – dokumento tipo apibrėžimas
*[LDP]: Linux Documentation Project – Linuxo dokumentacijos projektas
*[XML]: Extensible Markup Language, 1996
*[XHTML]: Extensible HyperText Markup Language, 2000
*[XAML]: Extensible Application Markup Language, 2008
*[S-expressions]: S-expression (symbolic expression) – S-išraiškos, 1997
*[QML]: Qt Modeling Language, 2009
*[EDN]: Extensible Data Notation, 2007

[Pradžia](../index.md)
