function avg(arr){

    let sum = 0;

    for(let num of arr){

        sum = sum+num ;
      
    }

    let average = sum / arr.length;
    console.log(average);
}

avg([5,10,5,4,1]);
