'use strict'

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

   ul= document.createElement('ul')    // if u need ordered list just change ul to ol :)
 
  document.getElementById('favoriteList').appendChild(ul);

  myHobbies.forEach(function (hobby){
      let li =document.createElement('li');
      ul.appendChild(li);
      li.innerHTML += hobby;
  });    

   