class World{

    gravity;
    entities;

    constructor(gravity){
        this.gravity = gravity;
        this.entities = [];
    }

    spawnEntity(entity){
        this.entities.push(entity);
    }

    update(){
        for(let entity of this.entities){
            if(entity.gravitable){
                entity.applyForce(this.gravity.scale(entity.mass));
            }
            entity.acceleration = entity.totalForce().scale(1/entity.mass);
            entity.appliedForces = [];
            var motion = Kinematics.motion(entity.position, entity.velocity, entity.acceleration);
            entity.position = motion.position;
            entity.velocity = motion.velocity;
        }
        return this;
    }
}
