//map creates a new array from existing array
const number = [20,21,22,23,24,25];
const word = ['girl','image','phone','new'];

/*const double = number.map(function(n){
    console.log(n*2);
});

double;*/

word.map(function(p){
    
    console.log(p.toUpperCase().split('').join('.'));

});