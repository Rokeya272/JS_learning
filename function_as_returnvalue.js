/*function multiplyby(num){
    return function (x){
        console.log(num*x);

    }
    
}
const triple = multiplyby(3);
const double = multiplyby(2);
triple(2);
double(5);*/

function inbetween(x,y){
    return function(num){

        if(num>=x && num<=y){
            console.log('true');
        }
        else{
            console.log('false');
        }

    }
}

const number = inbetween(0,30);
number(25);