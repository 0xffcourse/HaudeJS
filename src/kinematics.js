class Kinematics{
    static motion(position, velocity, acceleration){
        position[0] += velocity[0];
        position[1] += velocity[1];
        velocity[0] += acceleration[0];
        velocity[1] += acceleration[1];
        return {
            "position": position,
            "velocity": velocity,
            "acceleration": acceleration
        };
    }
}
