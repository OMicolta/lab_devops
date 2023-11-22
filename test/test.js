const { sumar, restar, multiplicar, dividir } = require('../src/calculator');

test('sumar 1 + 2 es igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

test('restar 3 - 1 es igual a 2', () => {
  expect(restar(3, 1)).toBe(2);
});

test('multiplicar 2 * 4 es igual a 8', () => {
  expect(multiplicar(2, 4)).toBe(8);
});

test('dividir 8 / 2 es igual a 4', () => {
  expect(dividir(8, 2)).toBe(4);
});

test('dividir por cero lanza un error', () => {
  expect(() => dividir(8, 0)).toThrow("No se puede dividir por cero");
});
