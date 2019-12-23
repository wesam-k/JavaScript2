'use strict'

let newQuotes = [{
    quote: "Don’t gain the world and lose your soul, wisdom is better than silver or gold",
    author: "Bob Marley",

},
{
    quote: "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
    author: "Kenneth Branagh",

},
{
    quote: "Don’t cry because it’s over, smile because it happened",
    author: "Ludwig Jacobowski",

},
{
    quote: "Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager",
    author: "Susan Sontag",

},
{
    quote: "To condense fact from the vapor of nuance.",
    author: "Neal Stephenson",

},
{
    quote: "Falling burned and blinded through a Siberian sky.",
    author: "William Gibson",

}];

let colors = ["#E74C3C", "#9B59B6", "#3498DB", "#1ABC9C", "#27AE60","#F1C40F" ];

                
document.getElementById('project').addEventListener('click',printQuote);

function quoteGenerate(newQuotes){
    
    let randomItem = Math.floor(Math.random()* newQuotes.length);
  
    return newQuotes[randomItem];

  
}
function printQuote(){
    let randomColor = Math.floor(Math.random()* colors.length);
  let newColor = colors[randomColor];
  style.backgroundColor = newColor;

  let randomQuote= quoteGenerate(newQuotes);

  let newQuote = randomQuote.quote;
  let newAuthor = randomQuote.author;

  document.getElementById('quote').innerHTML= newQuote;
  document.getElementById('author').innerHTML= newAuthor;
  document.getElementsByClassName('textColor').style.backgroundColor=newColor;

  
}
  

