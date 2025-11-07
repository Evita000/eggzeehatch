
let state = "egg";
let eggImg, eggzeeImg;
let crackTime = 0;

function preload() {
  eggImg = loadImage("assets/idelegg-min.png");
  eggzeeImg = loadImage("assets/eggzee7.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  background(230, 230, 255);

  if (state === "egg") {
    push();
    translate(width / 2, height / 2 + 40);
    rotate(sin(frameCount * 0.3) * 0.1);
    image(eggImg, 0, 0, eggImg.width * 0.15, eggImg.height * 0.15);
    pop();
    fill(80);
    text("Tap or click to hatch Eggzee 🥚", width / 2, height - 60);
  } 
  else if (state === "hatching") {
    push();
    translate(width / 2 + random(-5,5), height / 2 + 40 + random(-5,5));
    rotate(random(-0.1,0.1));
    image(eggImg, 0, 0, eggImg.width * 0.15, eggImg.height * 0.15);
    pop();
    if (millis() - crackTime > 1500) state = "awake";
  } 
  else if (state === "awake") {
    image(
      eggzeeImg,
      width / 2,
      height / 2 + sin(frameCount * 0.1) * 10,
      eggzeeImg.width * 0.15,
      eggzeeImg.height * 0.15
    );
    fill(80);
    text("Hi! I'm Eggzee 💛", width / 2, height - 60);
  }
}

function mousePressed() {
  if (state === "egg") {
    state = "hatching";
    crackTime = millis();
  }
}
