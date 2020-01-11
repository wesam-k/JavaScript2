'use strict'

const myNumbers = [1, 2, 3, 4];
const doubleEvenNumbers = myNumbers.filter(num => num % 2 === 0 ).map(num => num *2);
 
console.log(doubleEvenNumbers);

