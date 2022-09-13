/*console.log(animal);
var animal = 'rat';*/  //hoisted

//console.log(animal);

/*console.log(animal);
let animal = 'rat';*/ //not hoisted

/*cat();
function cat(){
    console.log('meaow');
}

cat();*/ //hoisted 

owl();
var owl = function(){
    console.log('Awwww');
}
owl();