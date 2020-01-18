'use strict'

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

   let ul= document.createElement('ul')    // if u need ordered list just change ul to ol :)
 
  document.getElementById('favoriteList').appendChild(ul);

  myHobbies.forEach(function (hobby){
      const li =document.createElement('li');
      ul.appendChild(li);
     li.innerHTML += hobby;
  });    

   