function iseven(val){
    if(val%2==0){
       return true;
    }
    else{
        return false;
    }
}

let arr=[21,41,29,24];

 console.log (arr.findIndex(iseven));

 // find the index which is true 