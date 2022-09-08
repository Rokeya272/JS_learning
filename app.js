/*const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);

while(guess!== target){
    console.log(`target : ${target} ; guess : ${guess}`);
    guess = Math.floor(Math.random()*10);
}

console.log(`target : ${target} guess: ${guess}`);
console.log(`CONGRATS YOU HAVE WON THE MATCH!`);*/

///use of break
const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);

while(true){

    if(guess === target)break;
    guess = Math.floor(Math.random()*10);
}

console.log(`target : ${target} guess: ${guess}`);
console.log(`CONGRATS YOU HAVE WON THE MATCH!`);