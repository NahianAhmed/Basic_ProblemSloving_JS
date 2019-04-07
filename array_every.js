
function iseven(val){
    if(val%2==0){
       return true;
    }
    else{
        return false;
    }
}

let arr=[21,41,22,3];

 console.log (arr.every(iseven));

 // if every item is true then gives true
