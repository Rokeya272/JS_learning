//const numbers = [20,21,22,23,24,25,26,27];

/*numbers.forEach(function(num){

    console.log(num*2);

})*/

/*function triple(n){
    console.log(n*3)
}

numbers.forEach(triple);*/

const books = [{
    title: 'rasha',
    author: 'jafar iqbal',
    rating: 4.5
},
{
    title: 'himu',
    author: 'humayun ahmed',
    rating:4.8
},
{
    title: 'shuvro' ,
    author: 'humayun ahmed',
    rating: 4.3
}];

/*books.forEach(function(n){
    console.log(n.rating);

});*/

/*for(let n of books){
    console.log(n);
}*/

books.forEach(function(n,idx){
    console.log(idx,n);

});

