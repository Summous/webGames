var LoadLevel = function(n) {
	var n = n - 1;
	var bricks = [];
	var p = level(n)
	for(var i = 0; i < p.length; i++) {
		var brick = new Brick();
		brick.x = p[i][0];
		brick.y = p[i][1];
		bricks.push(brick);
		log(brick.x,brick.y)
	}

}