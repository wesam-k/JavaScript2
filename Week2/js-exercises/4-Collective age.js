'usr strict'

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];




  const ageMember = hackYourFutureMembers.map(member => member.age);
  
  const allAge = ageMember.reduce((total, ele)=> total+ parseFloat(ele));


  
  console.log(`"The collective age of the HYF team is: [${allAge}]"`)