//Make a for loop that logs outevennumbers from 10- 40.
//However, if the number is divisible by 3 it should log "Divisible by 3!".
//If it's divisible by 5 it should log "Divisible by5!"
//If it's divisible by both 3 and 5 it should log "Jackpot!"
//Hint: you will need the modulo operator (%).
//Here is an example of what should be logged:
//10 "This is divisible by 5"
//12 "This is divisible by 3


const numbers=[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]; 

for(let i = 10; i<= 40; i++ ){

      if (i % 3=== 0){
        console.log('Divisible by 3'); 

     }
     else if(i % 5 === 0){
        console.log('Divisible by 5')
     }
        else if (i % 3 === 0 && i % 5 === 0){
            console.log('Jackpot'); 
        }
        else {console.log(i); 
        } 
 
}; 


    //Using JavaScript, create a button and add it to the html (the document).
//When the button is clicked:
//-An h1 tag with the text “This is an h1 tag” is insertedbelow the button;
//-The color of the button changes;
//-The button becomes disabled.
  
const container = document.querySelector("#container");
const button = document.createElement("button");
button.innerHTML = "Click me";
container.appendChild(button);
button.addEventListener("click",result)

function result() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "This is an h1 tag";
    document.body.appendChild(h1);
    
    button.style.backgroundColor = "green";
    button.disabled = true;
  };

  // Async API calls
//Make API calls using the Fetch API. Make use of the following API:
////https://catfact.ninja/fact
//Fetch the response3 timesand, if the fact lengthis less than 150, 
//display it in the
//DOM, in a paragraph tag.

const container2 = document.querySelector("#container2");
 async function getUrl(){
     const response= await fetch('https://catfact.ninja/fact'); 
     const data = await response.json();
  const fact = data.fact;
  
  if (fact.length < 150) {
    const p = document.createElement("p");
    p.innerHTML = fact;
    container.appendChild(p);
  }

    getUrl();
}; 
