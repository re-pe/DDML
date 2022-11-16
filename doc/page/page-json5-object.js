[
  { tag: '!doctype', html: 'html' },
  { tag: 'html', lang: 'en', value: [
    { tag: 'head', value: [
      { tag: 'meta', charset: 'utf-8' },
      { tag: 'meta', name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { tag: 'meta',
        name: 'description',
        content: 'kdl is a document language, mostly based on SDLang, with xml-like semantics that looks like you\'re invoking a bunch of CLI commands!'
      },
      { tag: 'title', value: [ 'kdl - Kat\'s Document Language' ] },
      { tag: 'link', rel: 'stylesheet', href: 'styles/global.css' }
    ] },
    { tag: 'body', value: [
      { tag: 'main', value: [
        { tag: 'header', class: 'kdl-section py-10 bg-gray-300', value: [
          { tag: 'h1', class: 'text-4xl text-center', value: [
              'kdl - Kat\'s Document Language'
            ]
          }
        ] },
        { tag: 'section', class: 'kdl-section', id: 'description', value: [
          { tag: 'p', value: [
            'kdl is a document language, mostly based on ',
            { tag: 'a', href: 'https: //sdlang.org', value: [ 'SDLang' ] },
            ' with xml-like semantics that looks like you\'re invoking a bunch of CLI commands'
          ] },
          { tag: 'p', value: [
            'It\'s meant to be used both as a serialization format and a configuration language, and is relatively light on syntax compared to XML.'
          ] }
        ] },
        { tag: 'section', class: 'kdl-section', id: 'design-and-discussion', value: [
          { tag: 'h2', value: [ 'Design and Discussion' ] },
          { tag: 'p', value: [
            'kdl is still extremely new, and discussion about the format should happen over on the ',
            { tag: 'a', href: 'https://github.com/kdoclang/kdl/discussions', value: [ 'discussions' ] },
            ' page in the Github repo. Feel free to jump in and give us your 2 cents!'
          ] }
        ] },
        { tag: 'section', class: 'kdl-section', id: 'design-principles', value: [
          { tag: 'h2', value: [ 'Design Principles' ] },
          { tag: 'ol', value: [
            { tag: 'li', value: [ 'Maintainability' ] },
            { tag: 'li', value: [ 'Flexibility' ] },
            { tag: 'li', value: [ 'Cognitive ', { tag: 'b', value: ['Simplicity'] }, ' and ', { tag: 'b', value: ['Learnability'] } ] },
            { tag: 'li', value: [ 'Ease of ', { tag: 'i', value: ['de'] }, '/serialization' ] },
            { tag: 'li', value: [ 'Ease of implementation' ] }
          ] }
        ] }
      ] }
    ] }
  ] }
]