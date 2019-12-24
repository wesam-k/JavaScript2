'use strict'

let googleLog = document.getElementById('hplogo'); // element contain log in google

function hijackGoogleLogo (){
    googleLog.setAttribute('src',' https://www.hackyourfuture.dk/static/logo-dark.svg')
    googleLog.srcset= " https://www.hackyourfuture.dk/static/logo-dark.svg";

}
hijackGoogleLogo();