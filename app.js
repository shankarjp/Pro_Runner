const canvas = document.getElementById('player');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.state = "down";
  }
  Animate() {
    if(this.state === "down") {
      this.y = canvas.height/2 + 50;
    } else {
      this.y = canvas.height/2 -150;
    }
    this.Draw();
  }
  Draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}

function Start() {
  player = new Player(300, canvas.height/2 + 50, 100, 100, '#0096FF');
  requestAnimationFrame(Update);
}

function Update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#404040';
  ctx.fillRect(0, canvas.height/2 - 150, canvas.width, 300);
  player.Animate();
  requestAnimationFrame(Update);
}

Start();

document.addEventListener('keydown', function(e) {
  if(e.keyCode == 32) {
    if(player.state === "down") {
      player.state = "up";
    } else {
      player.state = "down";
    }
  }
});
document.addEventListener('click', function() {
  if(player.state === "down") {
    player.state = "up";
  } else {
    player.state = "down";
  }
});

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
