
function fibonacci(val){
    let a=0,b=1,temp;
    let arr=[];
    while(val>0){
        arr.push(a);
        temp = b;
        b= a+b;
        a= temp;
        val --;
        
    }
    return arr.join(' ');
   
}

console.log(fibonacci(6));