function rolldie(){
    let roll = Math.floor(Math.random()*6)+1;
    console.log(`Rolled : ${roll}`);
}

function throwdice(numrolls){
    for(i=1;i<=numrolls;i++)

    rolldie();

}

throwdice(5);

//*function with arguents */

function greet(nickname){
    console.log(`hi,${nickname}`);
}
greet('Fabby');

//*function with multiple arguments*//

function square(num){
    console.log(num*num);
}

function sum(x,y){
    console.log(x+y);
}

function divide(a,b){
    console.log(a/b);
}

square(5);

//*more rturn value in function
 
function isred(color){
    if(color === 'red' ){
        return true;
    }
    else{
        return false;
    }
}

isred('RED');


