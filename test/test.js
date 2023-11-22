const suma = (a, b) => a + b;

test('suma 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

function test(description, callback) {
  try {
    callback();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}`);
    console.error(error);
  }
}

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} no es igual a ${expected}`);
      }
    }
  };
}
