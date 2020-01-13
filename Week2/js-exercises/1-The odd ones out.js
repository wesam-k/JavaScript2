'use strict'

const myNumbers = [1, 2, 3, 4];
function doubleEvenNumbers() {
    const num =myNumbers.filter(num => num % 2 === 0 ).map(num => num *2);
    return num
}
 
console.log(doubleEvenNumbers());

