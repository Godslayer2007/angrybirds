class rubberband {
    constructor(bodya , bodyb){
        var band = {
            bodyA: bodya,
            bodyB: bodyb,
            stiffness:0.04,
            length:1
        }
        this.rubber=con.create(band);
        World.add(world,this.rubber);
    }
    display(){
   var pointa = this.rubber.bodyA.position;
   var pointb = this.rubber.bodyB.position;
   line(pointa.x,pointa.y,pointb.x,pointb.y); 
    }

}