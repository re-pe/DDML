<!-- markdownlint-disable-next-line MD041 -->
[Grįžti](../index.md)

# Scribe

Taip galėtų atrodyti puslapio aprašymas Scribe žymėjimo kalba. Šis kodas nebūtinai atitinka Scribe kalbos taisykles, ir yra tik bandymas HTML kodą perteikti Scribe sintakse.

[Douglas Crockford apie Scribe](https://nofluffjuststuff.com/blog/douglas_crockford/2007/06/scribe)

```js
@!doctype "html"
@begin(html) 
lang="en"
@begin(head)
@meta[charset="utf-8"]
@meta[name="viewport" content="width=device-width, initial-scale=1.0"]
@meta[
name="description"
content="kdl is a document language, mostly based on SDLang, with xml-like semantics that looks like you're invoking a bunch of CLI commands!"
]
@title"kdl - Kat's Document Language"
@link(rel="stylesheet" href="styles/global.css")
@end(head)
@begin(body)
@begin(main)
@header { class="kdl-section py-10 bg-gray-300"
@h1[class="text-4xl text-center""kdl - Kats Document Language"]
}
@section{ class="kdl-section" id="description" 
@p {
kdl is a document language, mostly based on 
@a[href="https://sdlang.org" SDLang]
 with xml-like semantics that looks like you''re invoking a bunch of CLI commands
}

It''s meant to be used both as a serialization format and a configuration language, and is relatively light on syntax compared to XML.

}
@section { class="kdl-section" id="design-and-discussion"
@h2"Design and Discussion"
@p {
kdl is still extremely new, and discussion about the format should happen over on the 
@a { href="https://github.com/kdoclang/kdl/discussions"
discussions
}
 page in the Github repo. Feel free to jump in and give us your 2 cents!
}
}
@section class="kdl-section" id="design-principles" {
@h2"Design Principles"
@ol {
@li"Maintainability"
@li"Flexibility"
@li"Cognitive @b'simplicity' and @b'Learnability'"
@li"Ease of @i'de'/serialization"
@li"Ease of implementation"
}
}
@end(main)
@end(body)
@end(html)
```

[Grįžti](../index.md)
