class Circle {
    
    constructor(radius) {
        this.radius = radius;
        this.area = Math.PI * this.radius * this.radius;
        this.circumference = 2 * Math.PI + this.radius;
    }

}
