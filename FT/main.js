var angle = 0;
var length;

function setup() {
	createCanvas(1000,750);
	//slider = createSlider(0, TWO_PI, PI / 4, 0.01);
};

function draw() {
	background(50);
	var len = $('#fb').val();
	length = $('#length').val()/100;
	stroke(255);
	translate(width/2, height);
	// Можно поиграть с углами.
	angle = PI / 4;
	branch(len);
};
function update(){
	draw();	
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0,-len);
	if (len>4){
		push();
		rotate(angle);
		branch(len*length);
		pop();
		push();
		rotate(-angle);
		branch(len*length);
		pop();
		// Для 4-х веток.
		// push();
		// rotate(angle/0.5);
		// branch(len*length);
		// pop();
		// push();
		// rotate(-angle/0.5);
		// branch(len*length);
		// pop();
	}

}