'use strict'



function localTime(){

    let nlTime = new date ();
    let hours   = addZero(nlTime.getHours());
    let minutes = addZero(nlTime.getMinutes());
    let seconds = addZero(nlTime.getSeconds());
    document.getElementById('timeZone').innerHTML = hours +":"+ minutes+":" +seconds ;
localTime();

    timer; 
let timer = setInterval(localTime,1000);



function addZero(i) {      // to add zero to number
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}



 



