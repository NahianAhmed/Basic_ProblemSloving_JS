
class myclass{
  
    constructor(x,y){
       this.name = x;
       this.age = y;
    }
    

     show() {
       let x =[1,3,2,3,2,2,1];
       console.log(x.reverse().join(''));
      // x = x.toString();
       //console.log(x.split('').reverse().join(''));
        console.log("your name is",this.name,"your age is",this.age,".");
    }
    
}

let obj = new myclass("Nahian",25);
obj.show();