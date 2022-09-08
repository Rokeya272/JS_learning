for(let i=0;i<5;i++){
    console.log('outer');
    for(let j=0;j<5;j++){
        console.log('  inner');
    }
}

const gameboard = [[4,32,8,4],[64,8,32,2],[8,32,16,4],[2,8,4,2]];

let totalscore = 0;
for(let i=0;i<gameboard.length;i++){
    let row=gameboard[i];

    for(let j=0;j<row.length;j++){
        totalscore = totalscore+row[j];
        //console.log(row[j]);

    }
  

}
console.log(totalscore);

///while loop

let k=0;
while(k<=5){
    console.log(k);
    k++;
}


