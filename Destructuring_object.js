const runner = {
    first: 'Eliud',
    last : 'kipchoge',
    counrty : 'kenya',
    title : 'Elder of the order of the golden heart of kenya'
}

//const[food1,food2,food3]=food;
const{
    first,
    last,
    ...others
}=runner;

console.log(others);