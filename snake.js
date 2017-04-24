function Snake() {
	
	this.x = floor(random(width-scl));
	this.y = floor(random(height-scl));
	this.x = this.x%scl > 0 ? this.x - this.x%scl : this.x;
	this.y = this.y%scl > 0 ? this.y - this.y%scl : this.y;
	this.xs = 0;
	this.ys = 0;
	this.total = 1;
	this.tail = [];
	this.dead = false;

	this.dir = function(x,y){
		// console.log("dir");
		this.xs = x;
		this.ys = y;
	};

	this.death = function() {
		if (this.tail.length > 1) {
			for (var i = 0; i < this.tail.length; i++) {
				var pos = this.tail[i];
				var d = dist(this.x,this.y,pos.x, pos.y);
				if (d < 1) {
					alert("U MADE " + (this.total-1).toString() +" points\nPRESS ENER TO TRY AGAIN");
					this.total = 0;
					this.tail = [];
					this.xs = 0;
					this.ys = 0;
					this.dead = true;
				}

			}
		}
	};

	this.gd = function() {
		return this.dead;
	}

	this.update = function() {
		// console.log("update");
		if (!this.dead){
			if (this.total === this.tail.length) {
				for (var i = 0; i < this.tail.length-1 ; i++) {
					this.tail[i] = this.tail[i+1];
				}
			}
			this.tail[this.total-1] = createVector(this.x, this.y)
			this.x = this.x +this.xs*scl;
			this.y = this.y +this.ys*scl;

			this.x = constrain(this.x, 0, width-scl);
			this.y = constrain(this.y, 0, height-scl);
		}
		
	};

	this.show = function() {
		fill(floor(random(255)), floor(random(255)), floor(random(255)));
		for (var i = 0; i < this.tail.length-1; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		fill(floor(random(255)), floor(random(255)), floor(random(255)));
		rect(this.x, this.y, scl, scl);
	};

	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) {
			this.total++;
			return true;
		} else
			return false;
	};

};