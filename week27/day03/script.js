const button = document.getElementById("btn");  
const jokeDiv = document.getElementById("randomjoke");  
document.addEventListener("DOMContentLoaded", getJock);  
button.addEventListener("click", getJock);  
async function getJock() {  
 const jokeData = await fetch("https://icanhazdadjoke.com/", {  
  headers: {  
   Accept: "application/json"  
  }  
 });  
 const jokeObj = await jokeData.json();  
 jokeDiv.innerHTML = jokeObj.joke;  
 console.log(jokeData);  
}  