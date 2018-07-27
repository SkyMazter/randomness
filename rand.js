/*
function rand(){
const decimal = Math.random(0-2); // Random Decimal from 0-1
const times10 = decimal * 10; // Get Number between 0-10
const final = Math.floor(times10);
console.log(final);
}
rand();
*/

function getRandomInt(min, max) {
   let a = Math.ceil(min);
    let b = Math.floor(max);
    const final = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    console.log(final);
  }
getRandomInt(0,21);