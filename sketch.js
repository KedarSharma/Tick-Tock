var hr,sc,mn;
var hrangle,mnangle,scangle;
var hrhand,mnhand,schand;

function setup() {
	createCanvas(800,400);

	createSprite(400, 200, 50, 50);

	angleMode(DEGREES);
}

function draw() {
	background(0,0,0);

	translate(200,200);
	rotate(-90);

	hr = hour();
	sc = second();
	mn = minute();
	
	scangle = map(sc,0,60,0,360);
	mnangle = map(hr,0,60,0,360);
	hrangle = map(hr%12,0,12,0,360);

	push();
	rotate(scangle);
	stroke("red");
	strokeWeight(10);
	line(0,0,120,0);
	pop();

	push();
	rotate(mnangle);
	stroke("green");
	strokeWeight(10);
	line(0,0,100,0);
	pop();
	
	push();
	rotate(hrangle);
	stroke("blue");
	strokeWeight(10);
	line(0,0,80,0);
	pop();

	stroke("red");
	strokeWeight(5);
	noFill();
	arc(0,0,350,350,0,scangle);

	stroke("green");
	strokeWeight(5);
	noFill();
	arc(0,0,325,325,0,mnangle);

	stroke("blue");
	strokeWeight(5);
	noFill();
	arc(0,0,300,300,0,hrangle)

	drawSprites();
}