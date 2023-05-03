let font,
  fontsize = 12;
let bitstream = [];
let disco = false;
let notwhiterabbit;
let images = [];
let canvasx = 720;
let canvasy = 360;
let bgcolor = [];
let nx, ny, xmargin, ymargin;
let swidth = screen.width;
let smol = false;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont("./../../../../assets/Dosis.ttf");
  notwhiterabbit = loadImage('./../../../../assets/notwhiterabbit.png');
}

function setup() {
  print(swidth);
  if(swidth<800){
    smol=true;
    canvasx /= 2;
    //canvasy /= 2;
  }
  var canvas = createCanvas(canvasx, canvasy);
  canvas.parent('sketch-container');
  
  xmargin = random(-10, 10);
  ymargin = random(-10, 10);
  
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  nx = round(canvasx/notwhiterabbit.width);
  ny = round(canvasy/notwhiterabbit.height);
  
  //bgcolor = [[110,206,206], [242,103,103],[238,156,3], [169,67,67], [19,156,156], [238,135,146], [126,202,140], [247,1,159]];
  
  //bitstream =  [[110/256,206/256,206/256], [242/256,103/256,103/256],[238/256,156/256,3/256], [169/256,67/256,67/256], [19/256,156/256,156/256], [238/256,135/256,146/256], [126/256,202/256,140/256], [247/256,1/256,159/256]];
  
  bitstream = [[0.6, 0, 3],[0.1, 3, 0.4],[1.2, 1.6, 0.2],[3, 0.2, 3],[0.2, 1.2, 1.8],[1.2, 0.7, 0],[0.1, 0.1, 1.8],[0.1, 2.2, 2.3],[2, 0.2, 0],[0.1, 1.5, 0.4]];
  
  bitstream = shuffle(bitstream);

  for (let y = 0; y < ny; y += 1) {
      for (let x = 0; x < nx; x += 1) {
        images[x+ nx*y] = notwhiterabbit.get();
        images[x+ nx*y].loadPixels();
        for (let pix =0; pix < 4*180*180; pix+=4){
          images[x+ nx*y].pixels[pix] *= 1.5*bitstream[x+ nx*y][0];
          images[x+ nx*y].pixels[pix+1] *= 1.5*bitstream[x+ nx*y][1];
          images[x+ nx*y].pixels[pix+2] *= 1.5*bitstream[x+ nx*y][2];
        }
        images[x+ nx*y].updatePixels();
      }
    }
}

function draw() {
  background(0);
  if (! disco){
    // Set the gap between letters and the left and top margin
    translate(xmargin, ymargin);
    // Set the counter to start
  }
  fill(256);
  text('How long is forever?',3 + width/2, 3+height/2);
  
  for (let y = 0; y < ny; y += 1) {
      for (let x = 0; x < nx; x += 1) {
        image(images[x + nx*y], x*notwhiterabbit.width, y*notwhiterabbit.height + y*7);
      }
    }

  if (smol){
    fill(256);
    text('How long is forever?',3 + width/2, 3+height/2);
    fill(0);
    text('How long is forever?',3.5 + width/2, 3.5+height/2);
  }
}

function mousePressed() {
  if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<height){
  if (disco){
    disco = false;
  } else {
    disco = true;
        images = shuffle(images);
        xmargin = random(-10, 10);
        ymargin = random(-10, 10);
  }

  }
}
