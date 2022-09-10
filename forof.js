let team = ['football','cricket','tennis'];

for(let p of team){
    console.log(p);
}

for(let char of 'chicken'){
    console.log(char.toUpperCase());
}

// check all row sum are equal

let square = [[2,7,6],[9,5,1],[4,3,8]];

for(let s of square ){
    let sum = 0;

    for(let q of s){
        sum = sum+q;
        
    }
    console.log(`${s} summed ${sum}`);

    
    
}

//for of with object

const moviereviews = {
    arrival : 9.5,
    alien   : 9,
    amelie  : 8,
    'In Bruges' : 9,
    amadeus : 10,
    'kill bill': 8
}

for(let x of Object.keys(moviereviews)){
    console.log(x,moviereviews[x]);
}

for(let x of Object.values(moviereviews)){
    console.log(x);
}

//for in
for(let x in moviereviews){
    console.log(x,moviereviews[x]);
}
