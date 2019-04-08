
function Ispalindrom(value){
     let New_value = value.toString().split('').reverse().join('');

     if(value==New_value){
         console.log(value,'is a palindrpom');
     }
     else{
        console.log(value,'is not a palindrpom'); 
     }
     
}

Ispalindrom("momo");
