let font,
  fontsize = 12;
// bacteria motion parameters, make a class
let v0 = 1;
let xtarget;
let ytarget;
let xpos; 
let ypos;
let theta = -1;
let tumblerate = 0.05;
let hbact = 16;
let lbact = 32;
let deltatheta;
var targettheta;
var attractionrate = 0.05;
var tol = 0.1;
var foundfood = 0;
var sensedfood = 0;

//flagella motion paramters, make a class
let fxspacing = 1;
let flength = 26;
let fpoints = flength/fxspacing;
let famp;
let famprate = 0.1;
let fy1 = [];
let fy2 = [];

let time = 0;

//random points on stage
let npoint;
let pospoint = [];

function setup() { 
  createCanvas(400, 400);
  deltatheta = PI/6;
  npoint = random(15,35);
  xpos = random(width/3, 2*width/3);
  ypos = random(height/3, 2*height/3);
  for (let i=0; i<npoint; i++){
    pospoint[i] = [];
    pospoint[i][0] = random(0, width);
    pospoint[i][1] = random(0, height);
    pospoint[i][2] = random(3, 5);
  }
} 

function draw() { 
  background(208);
  stroke(108);
  fill(108);
  for (let i=0; i<npoint; i++){
    ellipse(pospoint[i][0], pospoint[i][1], pospoint[i][2], pospoint[i][2]);
  }
  stroke(0);
  

  sensedfood = 0;
  foundfood = 0;
  
  fill(226, 1, 71);
  //only happens when the mouse is held down, but happens
  //continuously
  if (mouseIsPressed) {
    if (clickisinside(mouseX, mouseY)){
      
      sensedfood = 1;
      fill(75, 185, 0);
      ellipse(mouseX, mouseY, hbact/2, hbact/2);
      
      targettheta = wrap(Math.atan2(mouseY-ypos, mouseX-xpos)+2*PI, 0, 2*PI);
      
      if (abs(mouseX-xpos)<lbact && abs(mouseY-ypos)<hbact){
        foundfood = 1;
        text("nom, nom, nom, nom, nom, nom", mouseX+10, mouseY+10);
        
      } else if (abs(targettheta-theta)>tol){
        theta += (targettheta-theta)*attractionrate;
        theta = wrap(theta, 0, 2*PI);
        foundfood = 0;
      }
    }
  }
  
  xpos += (1-foundfood)*v0*cos(theta);
  ypos += (1-foundfood)*v0*sin(theta);
  xpos = wrap(xpos, 0, width);
  ypos = wrap(ypos, 0, height);
  
  if (time === 0) {
    theta += (1-sensedfood)*random(-deltatheta, deltatheta);
    theta = wrap(theta, 0, 2*PI);
  }
  
  push();
  translate(xpos, ypos);
  rotate(theta);
  calcFlagella();
  renderFlagella();
  ellipse(0, 0, lbact, hbact);
  pop();
  
  time = (time+1) % (1/tumblerate);
}

function wrap(x, infimum, supremum) {
  if (x > supremum){
    x += infimum-supremum;
  }
  if (x < infimum){
    x += supremum-infimum;
  }
  return x;
}

function calcFlagella() {

  //famp = 0.7*hbact * cos(time*famprate*2*PI);
  let x = 0;
  
  for (let i = 0; i < fpoints; i++) {
    fy1[i] = sin(x*1.25*2*PI/flength) * 0.7*hbact * cos(time*famprate*2*PI*x/flength)*1.5*x/flength;
    fy2[i] = sin(-x*1.35*2*PI/(flength+5)) * 0.7*hbact * cos((time-2)*famprate*2*PI*x/(flength+5))*x/(flength+5);
    x += fxspacing;
  }
}

function renderFlagella() {
  stroke(18);
  for (let i = 0; i < fpoints-1; i++) {
    line(-i-lbact*0.5, fy1[i], -i-1-lbact*0.5, fy1[i+1]);
    line(-i-lbact*0.5, fy2[i], -i-1-lbact*0.5, fy2[i+1]);
  }
}

function clickisinside(x, y){
  if (x>0 && x<width && y>0 && y<height){
    return true;
  } else{
    return false;
  }
}
