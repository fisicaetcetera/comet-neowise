//Nessa versão, vou colocar minha imagem como fundo
//let cam;

let video;

let earthjpg;
let moonjpg;
let sunjpg;
let assinatura;
let posx=-200, posz=100;

function preload() {
  earthjpg = loadImage('earthcloud-1.jpg');
  moonjpg = loadImage('moonmap1k.jpg');
  sunjpg = loadImage('sun-1.jpg');
}

function setup() {
  createCanvas(1366, 768, WEBGL);

  video = createCapture(VIDEO);
  video.hide();
  
  assinatura = createGraphics(380, 100);
  assinatura.background(255, 100);
  assinatura.fill(0);
  assinatura.textAlign(CENTER);
  assinatura.textSize(90);
  assinatura.text('Bonelli', 190, 85);

}

function draw() {
  background(0);

  //translate(0,0,mouseX);
  push();
  translate(0, 0, -1000);
  scale(-1.0,1.0);
  texture(video);
  plane(2500);
  pop();

  push();
  texture(assinatura);
  translate(posx++,50,posz--);
  rotateY(frameCount/95);
  rotateX(frameCount/130);
  plane(50, 30);
  pop();
  //directionalLight(255, 255, 255, 1, 0, 0)
  //pointLight(255,255,0,0,0,200);

  push();

  texture(earthjpg);
  rotateY(frameCount / 3280);
  sphere(160);
  
  rotateY(frameCount / 1450);
  translate(110, 110, -900);
  texture(moonjpg);
  sphere(22);
  
  pop();
  
  push();
  rotateY(frameCount / 1500);
  translate(0, 0, -1000);
  pointLight(255,255,0,0,0,-1000);

  texture(sunjpg);
  sphere(25);
  pop();
  
}
