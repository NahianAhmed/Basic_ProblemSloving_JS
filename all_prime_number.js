
function check_prime(value){

   for(let i=0;i<=value;i++){
       for(let j=2;j<i;j++){
        if(i%j==0){
            
            break;
        }
        else{
            console.log(i +"- is prime :)");
            break;
        }
       }
   }
}

check_prime(20);