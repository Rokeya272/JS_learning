//initial
/*for(let i=0;i<7;i++){
    console.log("hello : ",i);
}*/

//square
/*for(let j=1;j<=5;j++){
    console.log(`${j}x${j} = ${j*j}`);
}*/

//decrement
for(let i=10;i>0;i-=1){
     console.log(i);
}

//array loops

const examscores = [87,73,33,59,91,64];

for(let i=0;i<examscores.length;i++){

    console.log(i,examscores[i]);
}

//for loops and array

const animal=['lion','tiger','dog'];

for(i=0;i<animal.length;i++){
    console.log(i,animal[i]);
}

const examscore = [98,67,73,90,45];
for(i=0;i<examscore.length;i++){
    console.log(i,examscore[i]);
}

const mystudents=[
    {
        fname : 'ritu',
        grade : 79
    },
    {
        fname : 'mila',
        grade : 92
    },
    {
        fname : 'tintu',
        grade : 85
    },
    {
        fname : 'sithi',
        grade : 94
    }
]

let total = 0;
for(let i =0;i<mystudents.length;i++){

    let p = mystudents[i];
    total = total+p.grade;


}

console.log(total/mystudents.length);




const word = 'FOCUSED';
let reverse = '';

for(let i=word.length-1;i>=0;i--){
    reverse = reverse+word[i];
    
}

console.log(reverse);
