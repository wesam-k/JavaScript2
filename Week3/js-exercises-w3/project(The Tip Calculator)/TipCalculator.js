'use strict'


const tip =document.getElementById('calc')
tip.addEventListener('click',(event)=>{
   event.preventDefault();
   calculator()
});

function calculator(){
   
    const amount = document.getElementById('amount').value;
    const discount = document.getElementById('discount').value;
    const people = document.getElementById('people').value;
    const eachHidden =document.getElementById('makeHidden')
    

     if(amount === "" ||discount === "" || people === ""){

        alert( "You need to fill in all the fields!"); 
         return;

     }

     if( people <= 1){
        eachHidden.style.display="none";
     }else{
        eachHidden.style.display="block";
     }

     
   const  percent = amount -(amount*discount /100);
    let total = percent / people;
    total = total.toFixed(2);

    document.getElementById('each').innerHTML= total;
   

    
   
}  

 
  
    





