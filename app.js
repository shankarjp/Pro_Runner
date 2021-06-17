const canvas = document.getElementById('player');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameSpeed = 3;
let holes = [];
let timer = 200;
let isGameOn = true;
let score = 0;
let highscore = 0;

function RandomNumber(min, max) {
  return Math.round(Math.random()*(max - min) + min);
}

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

class Hole {
  constructor() {
    this.x = canvas.width + 200;
    this.width = 300;
    this.color = '#404040';
    this.dx = -gameSpeed;
    let type = Math.round(Math.random());
    if(type === 1) {
      this.state = "up";
      this.y = 0;
      this.height = canvas.height/2 - 150;
    } else {
      this.state = "down"
      this.y = canvas.height/2 + 150;
      this.height = canvas.height/2 - 150;
    }
  }
  Update() {
    this.x += this.dx;
    this.Draw();
    this.dx = -gameSpeed;
  }
  Draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}

class Text {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
  }
  Draw() {
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = "30px sans-serif";
    ctx.fillText(this.text, this.x, this.y);
    ctx.closePath();
  }
}

function GenerateHole() {
  let hole = new Hole();
  console.log(holes);
  holes.push(hole);
}

function Start() {
  player = new Player(300, canvas.height/2 + 50, 100, 100, '#0096FF');
  if(localStorage.getItem('highscore')) {
    highscore = localStorage.getItem('highscore');
  }
  scoreText = new Text("Score: " + score, 200, 50);
  highscoreText = new Text("Highscore: " + highscore, canvas.width - 500, 50);
  requestAnimationFrame(Update);
}

function Update() {
  if(isGameOn) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#404040';
    ctx.fillRect(0, canvas.height/2 - 150, canvas.width, 300);
    player.Animate();
    requestAnimationFrame(Update);
    timer--;
    if(timer <= 0) {
      GenerateHole();
      timer = RandomNumber(200, 500) - gameSpeed * 8;
      if (timer < 60) {
        timer = 60;
      }
    }
    for(let i=0; i<holes.length; i++) {
      let h = holes[i];
      if(h.x + h.width < 0) {
        holes.splice(i, 1);
      }
      if((player.state == h.state) && (player.x + player.width > h.x) && (player.x < h.x + h.width)) {
          localStorage.setItem('highscore', highscore);
          document.removeEventListener('keydown', keyListener, true);
          document.removeEventListener('click', mouseListener, true);
          isGameOn = false;
          canvas.remove();
          var gameOver = document.createElement("h1");
          gameOver.innerText = "Game Over!";
          gameOver.classList.add("gameOver");
          document.body.appendChild(gameOver);
          var displayScore = document.createElement("h2");
          displayScore.innerText = "Score: " + score;
          displayScore.classList.add("displayScore");
          document.body.appendChild(displayScore);
          var displayHighscore = document.createElement("h2");
          displayHighscore.innerText = "Highscore: " + highscore;
          displayHighscore.classList.add("displayHighscore");
          document.body.appendChild(displayHighscore);
      }
      h.Update();
    }
    score++;
    scoreText.text = "Score: " + score;
    scoreText.Draw();
    if(score > highscore) {
      highscore = score;
      highscoreText.text = "Highscore: " + highscore;
    }
    highscoreText.Draw();
    gameSpeed += 0.001;
  }
}

Start();

var keyListener = function(e) {
  if(e.keyCode == 32) {
    if(player.state === "down") {
      player.state = "up";
    } else {
      player.state = "down";
    }
  }
}
document.addEventListener('keydown', keyListener, true);
var mouseListener = function() {
  if(player.state === "down") {
    player.state = "up";
  } else {
    player.state = "down";
  }
}
document.addEventListener('click', mouseListener, true);

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
