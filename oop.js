
class meetup{
    constructor(t,s){
       this.time=t; 
    }

    get spot(){
        return x;
    }
   
    meeting(){
        return "meeting time "+ this.time +" place name "+this.spot;
    }

    
} 
class teacher_meeting extends meetup{

    constructor(time){
        super(time)
        
    }
    
    

}

let obj = new teacher_meeting("5 PM");
obj.spot="Dhaka";
let meet= obj.meeting();

console.log(meet,x);
