'use strict'

const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
    },
  ];


 let list =document.createElement('ul'); 
for(let i =0; i< books.length;  i++){

  let paragraphEle = document.createElement('p');       // create p and append it 
  let bookName= document.createTextNode(`${Books[i].title} By ${Books[i].author}`);
  paragraphEle.appendChild(bookName);
  document.appendChild(paragraphEle);

  let item = document.createElement('li');  // create items for each book so still use for 


}

list.appendChild(item);
document.body.appendChild(list);


let bookkImg1 = document.createElement('img');  // create img for books and append their
let bookkImg2 = document.createElement('img');
bookkImg1.src= "http://prodimage.images-bn.com/pimages/9781452654126_p0_v4_s1200x630.jpg"; 
bookkImg2.src= "data:image/jpeg;base64,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"; 
item[0].appendChild(bookkImg1);  
item[1].appendChild(bookkImg2);



Books.forEach(function(Books) {
      if (Books.alreadyRead) {
          item.style.color ='green';      // if the book is read or not 
        } else {
          item.style.color ='red';
        }
    });

   
  

