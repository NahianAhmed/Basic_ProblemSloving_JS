
function max(val){
    let mx=0;
    // val.forEach(element => {
    //     if(mx<element){
    //         mx=element;
    //     }
        
    // });

    for (let i=0;i<val.length;i++){
        if(val[i]>mx){
            mx=val[i];
        }
    }

    console.log(mx);

}

 function comp(a,b){
     return a-b;
 }

let a = [500,1,4,32,2,33,100,2];
console.log(a.sort(comp));
max(a);
