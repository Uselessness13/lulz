function Branch(begin, end) {
	this.begin = begin;
	this.end = end;
	this.finished = false;

	this.jitter = function() {
		this.end.x += random(-1,1);
		this.end.y += random(-1,1);
	}

	this.show = function() {
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}

	this.branchR = function() {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(PI / 4);
		dir.mult(0.6);
		var newEnd = p5.Vector.add(this.end, dir);
		var br = new Branch(this.end, newEnd);
		return br;
	}
	this.branchL = function() {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-PI / 4);
		dir.mult(0.6);
		var newEnd = p5.Vector.add(this.end, dir);
		var br = new Branch(this.end, newEnd);
		return br;
	}
}
