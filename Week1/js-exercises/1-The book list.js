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
    }
  ];
 
  let item ;

 let list =document.createElement('ul'); 
for(let i =0; i< books.length;  i++){

  let paragraphEle = document.createElement('p');       // create p and append it 
  let bookName= document.createTextNode(`${Books[i].title} By ${Books[i].author}`);
  paragraphEle.appendChild(bookName);
  document.appendChild(paragraphEle);

   item = document.createElement('li');  // create items for each book so still use for 


}

list.appendChild(item);
document.body.appendChild(list);


let bookkImg1 = document.createElement('img');  // create img for books and append their
let bookkImg2 = document.createElement('img');
bookkImg1.src= "http://prodimage.images-bn.com/pimages/9781452654126_p0_v4_s1200x630.jpg"; 
bookkImg2.src= "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264i/8884400._UY630_SR1200,630_.jpg"; 
item[0].appendChild(bookkImg1);  
item[1].appendChild(bookkImg2);



Books.forEach(function(Books) {
      if (Books.alreadyRead) {
          item.style.color ='green';      // if the book is read or not 
        } else {
          item.style.color ='red';
        }
    });

   
  

