class Circle {
    
    constructor(radius) {
        this.radius = radius;
        this.area = Math.PI * this.radius * this.radius;
        // TODO: Look up formula for the circumference of a circle
        this.circumference = Math.PI + this.area
    }

}
