function callthreetime(f){
    f();
    f();

}

function cry(){
    console.log('I am sad');
}

function happy(){
    console.log('I am delighted');
}


//callthreetime(cry);

function repeat(p,num){

    for(let i=0;i<num;i++){

        p();

    }
}

//repeat(cry,5);

function pickone(f1,f2){
    let rand = Math.random();
    console.log(rand);

    if(rand>0.5){
        f1();
    }
    else{
        f2();
    }
}

pickone(happy,cry);