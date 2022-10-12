let canvas = document.qwerySelector('canvas');
let ctx = canvas.getContext('2d');
let colors = ['pink', 'gray', 'cornflowerblue', 'red', 'orange', 'purple', 'yellow'];
let mouse = {
    x: window.innerWidth / 2,
    y: windows.innerHeight / 2
};

let particles;
let particleCount = 400;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.init()
    }
    init() {
        this.position = {
            x: mouse.x,
            y: mouse.y
        }
        this.speed = 5;
        this.velocity = {
            x: Math.random() * this.speed,
            y: Math.random() * this.speed
        }
        this.size = Math.random() * 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];

        if(Math.random() < .5) {}
    }

    draw() {}
    update() {}
}