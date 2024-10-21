class Vector{
    constructor(components){
        this.components = components;
    }
    static zero(dimensions) {
        return new Vector(Array(dimensions).fill(0));
    }
    add(vector){
        if (this.components.length !== vector.components.length) {
            throw new Error("Vectors must be of the same dimension");
        }
        return new Vector(this.components.map((value, index) => value + vector.components[index]));
    }
    scale(scalar){
        return new Vector(this.components.map(c => c * scalar));
    }
}
