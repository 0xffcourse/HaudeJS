class World{

    gravity;
    entities;

    constructor(gravity){
        this.gravity = gravity;
        this.entities = [];
    }

    spawnEntity(entity){
        if(entity.gravitable){
            entity.applyForce(this.gravity.scale(entity.mass));
        }
        this.entities.push(entity);
    }

    update(){
        for(let entity of this.entities){
            entity.acceleration = entity.totalForce().scale(1/entity.mass);
            var motion = Kinematics.motion(entity.position, entity.velocity, entity.acceleration);
            entity.position = motion.position;
            entity.velocity = motion.velocity;
        }
        return this;
    }
}
