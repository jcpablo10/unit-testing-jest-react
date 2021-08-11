// Debe ser muy descriptivo
//Strings

const text = "Hola Mundo!";
const fruits = ['Piña','Melón', 'Sandía'];
const numbers = [11,30,50,20,70,90,87,23,678,101,60,80];

// String
test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
})

// Arrays
test('El array debe contener una Sandía', () => {
    expect(fruits).toContain('Sandía')
})

test('Check if the numbers of an array are greater than 10', () => {
    numbers.map((item)=> {
        expect(item).toBeGreaterThan(10)
    })
})

test('Check if the numbers of an array are greater than 10',() => {
    numbers.forEach(element => {
        expect(element).toBeGreaterThan(10);
    });
})

test('Check if the numbers of an array are greater than 10 ', () => {
    for (const number of numbers) {
        expect(number).toBeGreaterThan(10)
    }
})


// Numbers
test('El valor debe ser mayor que...', () => {
    expect(10).toBeGreaterThan(3);
})

// Boolean
test('El valor debe ser verdadero',()=> {
    expect(true).toBeTruthy()
})

// PCallback
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
}

test('Probando un callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    })
})

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject('Error')
        }
        resolve(str.split("").reverse().join(""))
    })
}

test('Test promise', () => {
    return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH')
        })
});

test('Probar async/await', async ()=> {
    const string = await reverseString2('Hola');
    expect(string).toBe('aloH')
})

// afterEach(()=> {
//     console.log('Después de cada prueba');
// })

// afterAll(()=>{
//     console.log('Después de todas las pruebas');
// })

// beforeEach(()=> {
//     console.log('Antes de cada prueba');
// });

// beforeAll(()=> {
//     console.log('Antes de todas las pruebas');
// })