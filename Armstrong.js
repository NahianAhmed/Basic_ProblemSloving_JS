function IsArmstrong(value){
    let new_value = value;
    let helper=0;
    while(new_value>0){
       let r =parseInt( new_value%10);
       helper =parseInt(helper + r*r*r);
       new_value= parseInt(new_value/10);
          //console.log(helper);
    }
    if(value==helper){
        console.log("Armstrang number");
    }
    else{
        console.log("Not Armstrang number");
    }
}

IsArmstrong(370);