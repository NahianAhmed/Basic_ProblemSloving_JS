
function iseven(val){
    if(val%2==0){
       return true;
    }
    else{
        return false;
    }
}

let arr=[21,41,22,3];

 console.log (arr.some(iseven));

 // if some of them true(even in here) then return true.
