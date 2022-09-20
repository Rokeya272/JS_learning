/*const nums = [3,4,5,6,7];

const prod = nums.reduce((total,currentval)=>{

    return total*currentval;
})*/

///finding maximum value

const grades = [67,84,97,92,88,99,73,70,64];

/*const maximum = grades.reduce((max,currentval)=>{
    if(currentval>max) return currentval;
    else return max;
})*/

///another method

/*const maximum2 = grades.reduce((max,currentval)=>{
    return Math.max(max,currentval);
})*/

const minimum = grades.reduce((min,currentval)=>{
    return Math.min(min,currentval);
})


