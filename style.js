const containerE1 = document.querySelector(".container");
const career =["STUDENT" , "WEB DELEVEPOR" , "SMIT LEARNER" , "ACHIEVER"]

let careerIdx = 0;
let characterIdx = 0;

updateText();
function updateText(){
    characterIdx++;
containerE1.innerHTML =`<h1>I AM A ${career[careerIdx].slice(0,characterIdx)}</h1>`

if(characterIdx === career[careerIdx].length){
    careerIdx++;
    characterIdx = 0;
}
if(careerIdx === career.length){
    careerIdx = 0;
}
setTimeout(updateText , 400);
}