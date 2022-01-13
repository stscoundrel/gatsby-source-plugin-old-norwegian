import { getEntries } from '../../src/services/dictionary';

describe('Dictionary tests', () => {
  const entries = getEntries();

  test('Dictionary contains correct amount of entries (42 021)', () => {
    expect(entries.length).toBe(42021);
  });

  test('Dictionary has added startsWith properties to source', () => {
    entries.forEach((entry) => {
      expect(Object.keys(entry)).toContain('startsWith');
    });
  });

  test('Dictionary has added url slugs to source', () => {
    entries.forEach((entry) => {
      expect(Object.keys(entry)).toContain('slug');
    });
  });

  test('Dictionary slugs are unique', () => {
    const slugs = new Set();

    entries.forEach((entry) => {
      slugs.add(entry.slug);
    });

    expect(slugs.size).toEqual(entries.length);
  });

  test('Dictionary slugs do not start with dashes', () => {
    entries.forEach((entry) => {
      expect(entry.slug.charAt(0)).not.toEqual('-');
    });
  });

  test('Dictionary contains expected content', () => {
    expect(entries[25000].word).toBe('náðuliga');
    expect(entries[25000].partOfSpeech).toBe('adv');
    expect(entries[25000].slug).toBe('naduliga');
    expect(entries[25000].definition).toBe('náðuliga, adv.  1)  i Stilhed, ubemærket; hann bauð at hafa Hánef þar á launþar til, er skip kemr n. at, svá athonum mætti útan koma Vem. 591; B.biskup biðr nú því öruggari til guðsaf öllu hjarta, sem hann má þat náð-uligar ok leyniligar gera fyrir mönn-um Mar. 116911 fg; biðjandi því meðmeira athuga, sem hann mátti leyni-ligar ok auðveldligar (&vl náðuligar)Mar. 83710. 34.  2)  naadigen; biðjom vér,at þér takir þessum várum erendumbetr ok náðuligar, en vér erum verðirDN. VII, 19013.');
    expect(entries[25000].startsWith).toBe('N');
  });
});
