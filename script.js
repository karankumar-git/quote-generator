let apiquote = [];
// let container = document.getElementsByClassName('container')[0];
// let spinner = document.getElementsByClassName('spinner-border')[0];
//loading
// function loading(){
//     container.hidden = true;
//     spinner.hidden = false;
// }
// function complete(){
//     container.hidden = false;
//     spinner.hidden = true;
// }
function newquote(){
    let quote = apiquote[Math.floor(Math.random()* apiquote.length)];
    return quote;
}
async function getquote(){
    // loading();
    let apiUrl = "https://type.fit/api/quotes";
    try{
        
        let response = await fetch(apiUrl);
        apiquote= await response.json();
        var array = newquote();
        document.getElementById("quoteSection").innerText = array.text;
        // if(array.author==null){
        //     document.getElementsByTagName('h4')[0].innerText = " ";
        // }
        // else{
        //     document.getElementsByTagName('h4')[0].innerText = "- " + array.author;
        // }
        
    }
    catch(error){
        console.log(error);
    }
//    complete();
}
getquote();


// // tweet quote

// function tweet(){
//     const quote = newquote().text;
//     const author = newquote().author;
//     const twitterUrl = `https://twitter.com/intent/tweet?text = ${quote} - ${author}`; 
//     window.open(twitterUrl,'_blank');
// }

// document.getElementsByClassName("Tweet")[0].onclick=function(){tweet()};
const article = document.querySelector('article');

// to compute the center of the card retrieve its coordinates and dimensions
const {
  x, y, width, height,
} = article.getBoundingClientRect();
const cx = x + width / 2;
const cy = y + height / 2;

// following the mousemove event compute the distance betwen the cursor and the center of the card
function handleMove(e) {
  const { pageX, pageY } = e;

  // ! consider the relative distance in the [-1, 1] range
  const dx = (cx - pageX) / (width / 2);
  const dy = (cy - pageY) / (height / 2);

  // rotate the card around the x axis, according to the vertical distance, and around the y acis, according to the horizontal gap 
  this.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`;
}

// following the mouseout event reset the transform property
function handleOut() {
  this.style.transform = 'initial';
}

article.addEventListener('mousemove', handleMove);
article.addEventListener('mouseout', handleOut);
