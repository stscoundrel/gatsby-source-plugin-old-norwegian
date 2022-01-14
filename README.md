# Gatsby Source Plugin Old Norwegian

Gatsby Source plugin for Old Norwegian/Norse dictionary by Johan Fritzner. Exposes 42 000+ Old Norwegian words into Gatsby datalayer.

Related projects:
- [Old Norwegian Dictionary (Node.js)](https://github.com/stscoundrel/old-norwegian-dictionary).
- [Old Norwegian Dictionary Abbreviations](https://github.com/stscoundrel/old-norwegian-dictionary-abbreviations).
- [Old Norwegian Dictionary Builder](https://github.com/stscoundrel/old-norwegian-dictionary-builder).

### Install

`yarn add gatsby-source-plugin-old-norwegian`


##### Usage

The plugin adds new `dictionaryEntry` type into datalayer. Individual entries are in format of:

```javascript
{
    word: String
    partOfSpeech: String
    definition: String
    slug: String (=slugified, unique headword)
    startsWith: String (=one uppercase letter)
}
```


To use the plugin in your Gatsby project, just add it to plugins config:

```javascript
// gatsby-config.js
module.exports {
  // Your other configs.
  plugins: [
    "gatsby-source-plugin-zoega"
  ]
}
```

### About "Dictionary of the Old Norwegian Language"

_"Ordbog over det gamle norske Sprog"_ dictionary was published in late 1800s by Johan Fritzner. Its is the largest Old Norse to Norwegian dictionary, containing over 40 000 word definitions. While the original dictionary is called dictionary of "old norwegian", it is practically a dictionary of western Old Norse. Technically "Old Norwegian" would be a later stage in the language.
