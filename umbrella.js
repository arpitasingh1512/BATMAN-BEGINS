class umbrella {
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(x,y);
        this.radius = 50;
        world.add(world, this.body)
    }
    display(){
        var pos= this.body.position;
        imageMode(CENTER);
    }
}