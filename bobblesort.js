
function bobble(arr){
 
    for (let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
           if(parseInt(arr[i])<parseInt(arr[j])){
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
           }
           
        }
    }

    return arr;

}
let arr = [1,4,9,6,3,0,110,-1];
console.log(bobble(arr));