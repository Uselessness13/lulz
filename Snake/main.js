var s;
var scl = 20;

var food;

function setup() {
	// console.log(setup);
	createCanvas(500,500);
	s = new Snake();
	frameRate(10);
	pl();
};

function draw() {
	// console.log("draw");
	background(50);
	
	if (s.eat(food)) {
		pl();
	}
	s.death();
	s.update();
	s.show();
	fill(floor(random(255)), floor(random(255)), floor(random(255)));
	rect(food.x, food.y, scl,scl);
};

function pl() {
	// console.log("pl");
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
};

function keyPressed() {
	// console.log("kp");
	if (!s.gd()){
		var a = [0,0];
		if (keyCode == UP_ARROW)
			a[1] = -1;
		if (keyCode == DOWN_ARROW)
			a[1] = 1;
		if (keyCode == LEFT_ARROW)
			a[0] = -1;
		if (keyCode == RIGHT_ARROW)
			a[0] = 1;
		s.dir(a[0], a[1]);
	}
	else if (keyCode == ENTER){
		s = new Snake();
		pl();
	}
};	