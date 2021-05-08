export {}

const text = "Prueba 1";
const fruits = ['manzana', 'melon', 'banana'];

test('should have a text', () => {
  expect(text).toMatch(/Prueba/);
});

test('Should have banana', () => {
  expect(fruits).toContain('banana')
});

test('should have a melon', () => {
  expect(fruits).toContain('melon')
});

test('greater than ', () => {
  expect(10).toBeGreaterThan(9);
});

test('if is true', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str: string, callback: any) => {
  callback(str.split("").reverse().join(""))
}

test('testing callback', () => {
  reverseString('Hola', (str: string) => {
    expect(str).toBe("aloH");
  })
})

const reverseString2 = (str : string) => {
  return new Promise((resolve, reject) => {
    if(!str) {
      reject(Error('Error'));
    }
    resolve(str.split("").reverse().join(""));
  })
}
test('testing promise', () => {
  return reverseString2('Hola').then((string) => {
    expect(string).toBe("aloH");
  })
})

const reverseString3 = async (str: string) => {
  return str.split("").reverse().join("");
}

test('testing async/await', async () => {
  let str = await reverseString3('Hola');
  expect(str).toBe("aloH");
})


afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('despues de todas las pruebas'));
beforeEach(() => console.log('antes de cada prueba'));
beforeAll(() => console.log('antes de todas las pruebas'));
