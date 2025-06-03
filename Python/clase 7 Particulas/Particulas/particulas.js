var canvasEl = document.querySelector('.fireworks');
var ctx = canvasEl.getContext('2d');
var numberOfParticles = 30;
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

function setCanvasSize() {
    canvasEl.width = window.innerWidth * 2;
    canvasEl.height = window.innerHeight * 2;
    canvasEl.style.width = window.innerWidth + 'px';
    canvasEl.style.height = window.innerHeight + 'px';
    canvasEl.getContext('2d').scale(2, 2);
}

function Particle(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 4 + 1;
    this.color = color;
    this.alpha = 1;
    this.angle = Math.random() * 2 * Math.PI;
    this.speed = Math.random() * 5 + 2;
    this.friction = 0.95;

    this.update = function () {
        this.speed *= this.friction;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= 0.01;
    };

    this.draw = function () {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
    };
}

var particles = [];

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

    for (var i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].alpha <= 0) {
            particles.splice(i, 1);
        }
    }
}

function createParticles(x, y) {
    for (var i = 0; i < numberOfParticles; i++) {
        var color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
    }
}

// Explosión automática cada 500 ms
setInterval(() => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    createParticles(x, y);
}, 500);

setCanvasSize();
window.addEventListener('resize', setCanvasSize);
animate();
