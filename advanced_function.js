///*function scope

/*function helpme(){
    let msg = 'I am on fire';
    msg;
}

msg;*/
//let i =2;
/*function to(){
    var i = 2;
    console.log(i);
}
to();
console.log(i);*/


///lexical function

function outer(){

    let movie = 'Almond';
    function inner(){
        console.log(movie.toUpperCase());

 
    }
    inner();
}

outer();

///function expressions

const square = function(num){
    console.log (num*num);
}

square(3);