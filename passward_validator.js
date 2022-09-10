function isValidPassward(passward,username){
    if( passward.length >= 8 && passward.indexOf(' ') === -1 && passward.indexOf(username) === -1 ){
        return true;
    }
    else{
        return false;
    }
}

isValidPassward('fresai5ee tnmu','ritu');