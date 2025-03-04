function setup() {
  createCanvas(400, 400);
}

let olhoX;
let olhoY;


function draw() {
  background("#FF5722");
  fill("#03A9F4");
  circle(200, 200, 300); //rosto
  fill("white");
  circle(150,150,60); // olho esquerdo 
  circle(250, 150, 60); //. olho direito
  line(150,300,270,270); // boca
  fill("#3F51B5");
  triangle(200,180,170,220,220,200,180); // nariz
  line(123, 115, 178, 113); // sombrancelha esquerda 
  line(225, 116, 279, 106); // sombrancelha direita 
 

  
  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);
 
  circle(olhoX, olhoY, 13); // nova pupila esquerda 
  circle ( olhoX  + 100 , olhoY , 10 ) // nova pupila direita
  if ( mouseIsPressed )  {
    console.log(mouseX, mouseY);
	}
  }
