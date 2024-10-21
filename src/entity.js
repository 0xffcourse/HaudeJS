class Entity{

    mass;
    epoch;
    position;
    hitBoxDeviant;
    spriteMap;

    state;
    velocity;
    acceleration;
    
    gravitable;
    visible;
    drawable;

    appliedForces;

    constructor(
        mass,
        epoch,
        position = [0, 0],
        hitBoxDeviant = [0, 0, 0, 0],
        spriteMap,

        state = "DEFAULT",
        velocity = [0, 0],
        acceleration = [0, 0],
        
        gravitable = true,
        visible = true,
        drawable = true,

    ){
        this.mass = mass;
        this.epoch = epoch;
        this.position = position;
        this.hitBoxDeviant = hitBoxDeviant;
        this.spriteMap = spriteMap;

        this.state = state;
        this.velocity = velocity;
        this.acceleration = acceleration;
        
        this.gravitable = gravitable;
        this.visible = visible;
        this.drawable = drawable;

        this.appliedForces = [];
    }

    draw(context, debugMode=false){
        if(debugMode){
            context.strokeStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`;
            context.strokeRect(
                this.position[0]+this.hitBoxDeviant[0],
                this.position[1]+this.hitBoxDeviant[1],
                this.hitBoxDeviant[2],
                this.hitBoxDeviant[3]
            );
        }
        if(this.drawable && this.spriteMap && this.spriteMap[this.state]){
            context.drawImage(this.spriteMap[this.state], this.position[0], this.position[1]);
        }
    }

    applyForce(force){
        this.appliedForces.push(force);
    }

    totalForce(){
        return this.appliedForces.reduce((total, force) => total.add(force), Vector.zero(this.position.length));
    }
}
