var tree = [];
var leafs = [];
var counter = 0;

function setup() {
	createCanvas(400,400);
	var a = createVector(width / 2, height);
	var b = createVector(width / 2, height - 100);

	var root = new Branch(a,b);

	tree[0] = root;
};

function mousePressed() {
	for (var i = tree.length-1; i >=0; i--) {
		if (!tree[i].finished) {
			tree.push(tree[i].branchR());
			tree.push(tree[i].branchL());
			tree[i].finished = true; 
		}
	}
	counter++;
	if (counter % 5 === 0){
		for (var i = 0; i < tree.length; i++) {
			if (!tree[i].finished){
				var leaf = tree[i].end.copy();
				leafs.push(leaf);
			}
		}

	}
}

function draw() {
	background(50);
	for (var i = 0; i < tree.length; i++) {
		tree[i].show();
		// tree[i].jitter();
	}
	for (var i = 0; i < leafs.length; i++) {
		fill(floor(random(255)), floor(random(255)), floor(random(255)), 100);
		noStroke();
		ellipse(leafs[i].x, leafs[i].y, 5,5);
		leafs[i].y += random(0,3);
	}
};
