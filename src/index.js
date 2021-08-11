const cities = ['Ciuda de México', 'Bogotá', 'Lima', 'Guadalajara', 'Monterrey'];

const randoString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
}


const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject('Error')
        }
        resolve(str.split("").reverse().join(""))
    })
}

module.exports = randoString();