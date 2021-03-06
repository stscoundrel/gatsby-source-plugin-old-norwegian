import { DictionaryEntry } from 'old-norwegian-dictionary/dist';

/**
 * Extended "gatsby" version of DictionaryEntry.
 * Added data that is commonly needed for frontend routing & queries.
 */
export interface GatsbyDictionaryEntry extends DictionaryEntry {
  slug: string;
  startsWith: string;
}

/**
 * Nodified version of entry with internal Gatsby fields.
 */
export interface DictionaryEntryNode extends GatsbyDictionaryEntry {
  id: string,
  parent: string | null,
  children: string[],
  internal: {
    type: string,
    contentDigest: string,
  }
}
