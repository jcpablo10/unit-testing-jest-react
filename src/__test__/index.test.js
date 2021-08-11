const randomStrings = require('../index.js');

describe('Esta es una suite de pruebas', () => {
    test('Probar la funcionalidad', () => {
        expect(typeof (randomStrings)).toBe('string');
    })

    test('Comprobar que no existe una ciudad', () => {
        expect(randomStrings).not.toMatch(/Veracruz/);
    })
})
