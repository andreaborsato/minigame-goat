let bullet;
let playerX = 400;
let playerY = 400;
let shooting = false;

class Bullet {
  constructor(initPosX, initPosY) {
    this.initPosX = initPosX;
    this.initPosY = initPosY;
    this.x = mouseX;
    this.y = mouseY;
    this.angle = atan2(this.y - this.initPosY, this.x - this.initPosX);

    //circle(initPosX, initPosY, 10);
  }

  update() {
    const dx = cos(this.angle);
    const dy = sin(this.angle);
    this.initPosX += dx * 5;
    this.initPosY += dy * 5;
    console.log(this.angle);
  }

  display() {
    circle(this.initPosX, this.initPosY, 10);
  }
}

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);

  // bullet = new Bullet(playerX, playerY);
  square(400, 400, 50);

  if (bullet) {
    bullet.update();
    bullet.display();
  }

  if (shooting) {
    shooting = false;
  }
}

function keyPressed() {
  if (keyCode === 32) {
    console.log("SHOOT!");
    shooting = true;
    bullet = new Bullet(playerX, playerY);
  }
}

rectMode();
