window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const image1 = this.document.getElementById('image1');

    class Particle {
        constructor() {
            this.x = 200;
            this.y = 150;
            this.size = 100;
        }
        draw(){
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    class Effect{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.particlesArray = [];
        }
        init(){
            this.particlesArray.push(new Particle());
        }
        draw(){
            this.particlesArray.forEach(particle => particle.draw());
        }
    }

    const effet = new Effect(canvas.width, canvas.height);
    effect.init();
    effect.draw();

    function animate(){

    }

});