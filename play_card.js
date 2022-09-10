function getcard(){
    let value = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let pick = Math.floor(Math.random()*value.length);
    const val = value[pick];


    const suits = ['clubs','spades','hearts','diamonds'];
    let pick2 = Math.floor(Math.random()*suits.length);
    const suit = suits[pick2];

    console.log(`{value: '${val}' suit: '${suit}' }`);


}

getcard();

