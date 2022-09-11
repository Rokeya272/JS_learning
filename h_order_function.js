function add(x,y){

    console.log(x+y);

}

const subtract = function(a,b){
    console.log(a-b);
}

const divide = function(m,n){
    console.log(m/n);
}

const operation = [add,subtract,divide];

//console.log(operation[2](30,5));

for(let func of operation){
    func(30,5);
}