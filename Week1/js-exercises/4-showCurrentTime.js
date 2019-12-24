'use strict'



function localTime(){

    let nlTime = new date ();
    let hours   = addZero(nlTime.getHours());
    let minutes = addZero(nlTime.getMinutes());
    let seconds = addZero(nlTime.getSeconds());
    let zero =document.getElementById('timeZone');
    zero.innerHTML = hours +":"+ minutes+":" +seconds ;
    
    function addZero(zero) {      // to add zero to number
      if (zero < 10) {
        zero= "0" + zero;
      }
      return zero
    }
  }
    
  localTime();

    timer; 
let timer = setInterval(localTime,1000);







 



