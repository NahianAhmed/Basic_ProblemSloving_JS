function max(val){
   
    /// old fashon
    let temp =[];
    for (let i=val.length-1;i>-1;i--){
        temp.push(val[i]);
    }
    console.log(temp);
    
   // console.log(val.reverse()); // that works too

}

let a = [500,1,4,32,2,33,100,2];
max(a);