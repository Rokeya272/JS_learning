const words = ['dog','dig','log','bag','wag'];

const alllets = words.every(word =>word.length === 3);

const alllast = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g';
})

const somestart = words.some(word => word[0] === 'd');//true
const everystart = words.every(word => word[0] === 'd');//false