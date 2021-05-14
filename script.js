let apiquote = [];
let container = document.getElementsByClassName('container')[0];
let spinner = document.getElementsByClassName('spinner-border')[0];
//loading
function loading(){
    container.hidden = true;
    spinner.hidden = false;
}
function complete(){
    container.hidden = false;
    spinner.hidden = true;
}
function newquote(){
    let quote = apiquote[Math.floor(Math.random()* apiquote.length)];
    return quote;
}
async function getquote(){
    loading();
    let apiUrl = "https://type.fit/api/quotes";
    try{
        
        let response = await fetch(apiUrl);
        apiquote= await response.json();
        var array = newquote();
        document.getElementById("quoteSection").innerText = array.text;
        if(array.author==null){
            document.getElementsByTagName('h4')[0].innerText = " ";
        }
        else{
            document.getElementsByTagName('h4')[0].innerText = "- " + array.author;
        }
        
    }
    catch(error){
        console.log(error);
    }
    complete();
}
getquote();


// tweet quote

function tweet(){
    const quote = newquote().text;
    const author = newquote().author;
    const twitterUrl = `https://twitter.com/intent/tweet?text = ${quote} - ${author}`; 
    window.open(twitterUrl,'_blank');
}

document.getElementsByClassName("Tweet")[0].onclick=function(){tweet()};
