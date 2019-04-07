
class parent{
     constructor(name,address){
         this.name=name;
         this.address=address;
     }
    set full_name(last_name){

         this.name= this.name+" "+last_name;
    }
    get full_name(){
          return this.name
    }
  
}

class child extends parent{
    constructor(n,a){
          super(n,a);
    }
    
    yourinfo(){
        console.log("Name : ",this.full_name,"Address : ",this.address);
    }
    


}

let obj = new child("Nahian","Madaripur");
obj.full_name="Ahmed";
obj.yourinfo();