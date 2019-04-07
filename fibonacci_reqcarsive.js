
function fibonacci(val){
    if(val<=1){
        return 1;
    }
   return fibonacci(val-1)+fibonacci(val-2);
}

console.log(fibonacci(4));