var angle = 0;
var slider;

function setup() {
	createCanvas(500,500);
	slider = createSlider(0, TWO_PI, PI / 4, 0.01);
};

function draw() {
	background(50);
	var len = 20;
	stroke(255);
	translate(200, height);
	angle = slider.value();
	branch(len);
};

function branch(len) {
	line(0, 0, 0, -len);
	translate(0,-len);
	if (len>5){
		push();
		rotate(angle);
		branch(len*0.5);
		pop();
		push();
		rotate(-angle);
		branch(len*0.5);
		pop();
	}

}