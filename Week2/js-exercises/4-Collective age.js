'usr strict'

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];


function members(){

  const ageMember = hackYourFutureMembers.map(member => member.age);
  
  const allAge = ageMember.reduce((total, num)=> total+ parseFloat(num));

  return `"The collective age of the HYF team is: [${allAge}]"`

};

console.log(members());