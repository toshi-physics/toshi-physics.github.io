let font,
  fontsize = 6;
let bitstream = [];
let drawpicrewtoshi = false;
let picrewtoshi;
let canvasx = 300;
let canvasy = 300;
let bps;
let charperframe;
let counter = -1;
let fr = 34;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
	font = loadFont("./../assets/Dosis.ttf");
	picrewtoshi = loadImage('./../assets/picrew.png');
	picrewtoshi.loadPixels();
}

function setup() {
	var canvas = createCanvas(canvasx, canvasy);
	canvas.parent('sketch-container');
  // Set text characteristics
	textFont(font);
	textSize(fontsize);
	textAlign(CENTER, CENTER);
	let d = pixelDensity();
	let npix = 4 * picrewtoshi.width * picrewtoshi.height;
	for (let i=0; i<npix; i+= 4){
		if (picrewtoshi.pixels[i]>0){
			picrewtoshi.pixels[i] = 2;
                        picrewtoshi.pixels[i+1] = 220;
                        picrewtoshi.pixels[i+2] = 220;
			picrewtoshi.pixels[i+3] = 1;
		}
	}
	picrewtoshi.updatePixels();
	picrewtoshi.resize(canvasx, canvasy);

    	bitstream = [1,0,0,1,0,0,1, ,0,1,0,0,0,0,0, ,1,1,0,0,0,0,1, ,1,1,0,1,1,0,1, ,0,1,0,1,1,0,0, ,0,1,0,0,0,0,0, ];
	bps = 85/60;
	charperframe = round(bps*8*6 / fr);	
	frameRate(fr);
}

function draw() {
	if (drawpicrewtoshi){
		background(picrewtoshi);
  	} else {
    		background(0);
	}
    // Set the gap between letters and the left and top margin
    	let gap = 6;
    	let margin = 10;
    	translate(margin * 1, margin * 1);

	//counter = (counter+2) %  48; 
	counter = (counter+1) %  24;
	let ccounter = 12 * (round(counter/24));

    // Loop as long as there is space on the canvas
    	for (let y = 0; y < height - gap; y += gap) {
      		for (let x = 0; x < width - gap; x += gap) {
        	// Draw the letter to the screen
        		fill(177);
			text(bitstream[ccounter %  bitstream.length], x, y);
        	// Increment the counter
        		ccounter++;
      		}
    	}
}

function mousePressed() {
	if (mouseX<width && mouseX>0 && mouseY>0  && mouseY<height){
		if (drawpicrewtoshi){
			drawpicrewtoshi = false;
			print("set draw toshi to false");
		} else {
			drawpicrewtoshi = true;
	 		print("set draw toshi to true");
	 	}
	}
}
