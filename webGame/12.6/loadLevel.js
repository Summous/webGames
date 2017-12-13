	var loadLevel = function(n) {
		var n = n - 1;
		var p = level[n]
		var bricks = [];
		for(var i = 0; i < p.length; i++) {
			var brick = new Brick();
			brick.x = p[i][0];
			brick.y = p[i][1];
			brick.lives = p[i][2];
			bricks.push(brick);
		}

		return bricks;
	}

