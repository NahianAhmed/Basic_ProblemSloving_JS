
class parent{
    constructor(name,family){
        this.name=name;
        this.family=family;      
    }
    
    get sname(){
       return "parent "+this.name;
    }

    
    get sfamily(){
       return "parent "+this.family;
    }

}
class child extends parent {
      constructor(nam,fam,cls){
          super(nam,fam);
          this.cls=cls;   
      }
      get all(){
          return " name :"+this.sname+" family : "+this.sfamily+ " class : "+this.cls;
      }
      get showcls(){
          return "child class "+this.cls;
      }
      
}

let obj =new child("Human","Mamal","human class");
let x= obj.all;
let y= obj.showcls;
console.log(x,y);