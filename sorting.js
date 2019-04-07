
function sorting(a,b){
    return a-b;
}

let arr=[1,4,9,6,3,0,110,11.11,-1];
arr.sort(sorting);
console.log(arr.join(' '));