import { DictionaryEntry } from 'old-norwegian-dictionary/dist/models';

/**
 * Extended "gatsby" version of DictionaryEntry.
 * Added data that is commonly needed for frontend routing & queries.
 */
export interface GatsbyDictionaryEntry extends DictionaryEntry {
  slug: string;
  startsWith: string;
}
