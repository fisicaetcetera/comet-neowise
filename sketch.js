// Colocando uma câmara
// Para colocar o cometa Neowise. Translação e rotação 
//de cada planeta/lua sincronizado com a rotação to sol de //27 dias.
// Funcionando razoavelmente

let rcom, xcom, ycom;
let excent = 0.9992;
let comtilt = 2.26893; //130 graus
let acom = 370;
let rcomAnt;
let excentsq = 0.9984;
let want, rant;
let teta;

let cam;
let angleCam = 0;

let earthjpg;
let moonjpg;
let marsjpg;
let sunjpg;
let starsjpg;
let assinatura;
let posx = -200,
  posz = 100;

function preload() {
  neowise = loadImage('cometNeowisetransp.jpg');
  earthjpg = loadImage('earthcloud-1.jpg');
  moonjpg = loadImage('moonmap1k.jpg');
  marsjpg = loadImage('mars.jpg');
  sunjpg = loadImage('8k_sun.jpg');
  mercuryjpg = loadImage('mercury.jpg');
  venusjpg = loadImage('venus.jpg');
  starsjpg = loadImage('stars.jpg');
  earthRadius = 4.258; //in e-5 AU
  marsRadius = 2.26;
  venusRadius = 4.04;
  sunRadius = 465;
  mercuryRadius = 1, 63083872e-5;
}

function setup() {
  createCanvas(1366, 768, WEBGL);

  assinatura = createGraphics(380, 100);
  assinatura.background(255, 100);
  assinatura.fill(0);
  assinatura.textAlign(CENTER);
  assinatura.textSize(90);
  assinatura.text('Bonelli', 190, 85);

  //condição inicial para cometa

  teta = -0.507 //dia 24/6/2020
  deltateta = 0.5 * 60 / (3280 * 27);
  rcomAnt = acom * (1 - excentsq) / (1 + excent * cos(teta));
  console.log("rcomAnt= ", rcomAnt);
  console.log("deltateta = ", deltateta);
}

function draw() {
  background(0);

  angleCam = frameCount/250; 
  camera(300*sin(angleCam),300*cos(angleCam),500*(1 + sin(angleCam)),0,0,-1000,0,1,0);

  //translate(0, 0, -5 * mouseX);
  //translate(0, -5 * mouseY + height / 2, 0);
  //rotateY(mouseX / 50);
  //rotateX(-mouseY/50);
  push();
  translate(0, 0, -3000);
  texture(starsjpg);
  sphere(5500);
  pop();

  push();
  texture(assinatura);
  translate(posx++, 50, posz--);
  rotateY(frameCount / 95);
  rotateX(frameCount / 130);
  plane(50, 30);
  pop();
  //directionalLight(255, 255, 255, 1, 0, 0)
  //pointLight(255,255,0,0,0,200);

  push();

  translate(0, 0, -500);
  texture(sunjpg);
  rotateY(frameCount / 3280);
  sphere(80);
  pop();

  //cometa
  push();

  rcom = acom * (1 - excentsq) / (1 + excent * cos(teta));
  deltateta = deltateta * pow((rcomAnt / rcom), 2);
  teta += deltateta;
  //console.log(teta, deltateta);

  zcom = rcom * cos(teta);
  ycom = rcom * sin(teta);
  xcom = rcom * cos(2.461);
  translate(0, -1000 * ycom, 1000 * zcom - 500);
  // console.log(ycom,zcom);
  rotateX(-1.5708 + teta);
  texture(neowise);
  cone(10, 59 * .8/rcom); 

  rcomAnt = rcom;
  pop();

  push();
  rotateY(frameCount / 10641);
  translate(0, 0, -1390);
  rotateY(frameCount / 29520);
  texture(mercuryjpg);
  sphere(13)
  pop();

  push();
  rotateY(frameCount / 27333);
  translate(0, 0, -1723);
  rotateY(frameCount / 29520);
  texture(venusjpg);
  sphere(35);
  pop();

  push();
  rotateY(frameCount / 43733);
  translate(0, 0, -2000);
  texture(earthjpg);
  sphere(40);

  rotateY(frameCount / 3280);
  translate(-58, 0, 0);
  texture(moonjpg);
  sphere(10);
  pop();


  push();
  rotateY(frameCount / 83457);
  translate(0, 0, -2524);
  rotateY(frameCount / 68123);
  texture(marsjpg);
  sphere();
  pop();

}
