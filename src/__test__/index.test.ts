import randomScripts from './../index';

describe('Probar funcionalidades de random strings', () => {
  test('Probar la funcionalidad', () => {
    expect(typeof (randomScripts())).toBe('string');
  });
  test('Probar que no existe una ciudadd', () => {
    expect(randomScripts()).not.toContain('Cordoba');
  });
})
