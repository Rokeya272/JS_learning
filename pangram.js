function ispangram(sentence){

    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(sentence.indexOf(char) === -1 ){
            
            return false;
        }
        else{
            //console.log('ok');
            return true;
        }
    }
}

ispangram('the five boxing wizrds jump quickly');