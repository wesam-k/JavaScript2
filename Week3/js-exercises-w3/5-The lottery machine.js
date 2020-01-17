'use strict'

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    for (let i = startIndex ; i <= stopIndex; i++){
      numbers.push(i); 
    }
    
 
    numbers.forEach(num => {
      if(num % 3 === 0){
        threeCallback(num)
      }
      if(num % 5 === 0){
        fiveCallback(num);
      }
   
    });
   

}

function sayThree(number){
  console.log(` ${number} is divisible by 3 `)
}   
function sayFive(number){
  console.log(` ${number} is divisible by 5`)
}   


        
 threeFive(10,15,sayThree, sayFive)


    
