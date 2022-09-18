const prices = [1,2,10,20,52,100,2000];

const asc = prices.sort();

const asc2 = prices.sort((a,b) => a-b);
const dsc2 = prices.sort((a,b) => b-a);

const asc3 = prices.slice().sort((a,b) => a-b);
const dsc3 = prices.slice().sort((a,b) => b-a);