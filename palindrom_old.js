
function Ispalindrom(value){
    let new_value = value;
    let helper=0;
    while(new_value>0){
       let r =parseInt( new_value%10);
       helper =parseInt(helper*10 + r);
       new_value= parseInt(new_value/10);
       //console.log(helper);
    }
    console.log(helper);
}

Ispalindrom(123);