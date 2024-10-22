class Kinematics{
    // position, velocity and acceleration all are type Vectors
    static motion(position, velocity, acceleration){
        position = position.add(velocity);
        velocity = velocity.add(acceleration);
        return {
            "position": position,
            "velocity": velocity
        };
    }
}
