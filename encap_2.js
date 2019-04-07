
class parent{
    constructor(){
        this.name;
        this.age;
    }
    setname(name){
        this.name=name;
    }
   
    getname(){
        return this.name;
    }
    setage(age){
        this.age=age;
    }
    getage(){
        return this.age;
    }

}

let obj = new parent();
obj.setname("Nahian");
obj.setage(25);
console.log("Your Name is :",obj.getname(),"and your age is ",obj.getage()); 