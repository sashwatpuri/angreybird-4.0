class Slingshot {
    constructor(bodyX , pointY) {
        var option = {
            bodyA : bodyX , 
            pointB : pointY ,
            stiffness : 0.1,
            length : 10 
          }
          this.pointB = pointY ; 
          
          this.sling = Constraint.create(option) ;
          World.add(world,this.sling) ; 

          this.sling1 = loadImage("sprites/sling1.png");
          this.sling2 = loadImage("sprites/sling2.png");
          this.sling3 = loadImage("sprites/sling3.png");
    }

    display(){
        image(this.sling1 ,200,20);
        image(this.sling2 ,170,20);
        if(this.sling.bodyA){

            push();
        
        stroke(48,22,10);
        if(this.sling.bodyA.position.x < 220){
            strokeWeight(7) ;
            line(this.sling.bodyA.position.x - 25 , this.sling.bodyA.position.y , this.pointB.x -10 , this.pointB.y);
            line(this.sling.bodyA.position.x -25 , this.sling.bodyA.position.y , this.pointB.x + 30, this.pointB.y);
            image(this.sling3,this.sling.bodyA.position.x - 30 ,this.sling.bodyA.position.y - 10,15,30);
        }
        else{
            strokeWeight(3);
            line(this.sling.bodyA.position.x + 25 , this.sling.bodyA.position.y , this.pointB.x -10 , this.pointB.y);
            line(this.sling.bodyA.position.x +25 , this.sling.bodyA.position.y , this.pointB.x + 30, this.pointB.y);
            image(this.sling3,this.sling.bodyA.position.x + 25 ,this.sling.bodyA.position.y - 10,15,30);
        }
        pop();
    }
    }

    fly(){
        this.sling.bodyA = null ;
    }
    attach(body){
        this.sling.bodyA = body ;

    }
}
