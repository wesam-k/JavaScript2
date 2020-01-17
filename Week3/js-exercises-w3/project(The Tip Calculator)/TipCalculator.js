'use strict'


let tip =document.getElementById('calc')
tip.addEventListener('click',(event)=>{
   event.preventDefault();
   calculator()
});

function calculator(){
   
    let amount = document.getElementById('amount').value;
    let discount = document.getElementById('discount').value;
    let people = document.getElementById('people').value;
    let eachHidden =document.getElementById('makeHidden')
    

     if(amount === "" ||discount === "" || people === ""){

        alert( "You need to fill in all the fields!"); 
         return;

     }

     if( people <= 1){
        eachHidden.style.display="none";
     }else{
        eachHidden.style.display="block";
     }

     
     let  percent = amount -(amount*discount /100);
    let total = percent / people;
    total = total.toFixed(2);

    document.getElementById('each').innerHTML= total;
   

    
   
}  
document.getElementById('makeHidden').style.display="none";
 
  
    





