let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let colors = ['pink', 'gray', 'cornflowerblue', 'red', 'orange', 'purple', 'yellow'];
let mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

let particles;
let particleCount = 300;

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
        this.speed = 15;
        this.velocity = {
            x: Math.random() * this.speed,
            y: Math.random() * this.speed
        }
        this.size = Math.random() * 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];

        if(Math.random() < .5) {
            this.velocity.x *= -1;
        }

        if(Math.random() < .5) {
            this.velocity.y *= -1;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.isDead()) {
            this.init();
        }
        
        this.draw()
    }

    isDead() {
        return this.position.x < 0 || this.position.y < 0 || this.position.x > window.innerWidth || this.position.y > window.innerHeight;
    }
}

particles = Array.from(Array(particleCount), () => new Particle());

requestAnimationFrame(update);

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => particle.update());

    requestAnimationFrame(update);
}

// Events

document.body.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})