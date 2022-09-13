/*function grumpus(){
    alert('hahaaaa');
}*/


//setTimeout(grumpus,5000);

/*setTimeout(function(){
    alert('Welcome');
} ,5000);*/

const btn = document.querySelector('button');
//btn.addEventListener('click',grumpus);
btn.addEventListener('click',function(){

    alert('Why did you click me!')
});