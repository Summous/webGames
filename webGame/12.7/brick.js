	var Brick = function() {
		//
	    var img = imagePath("Brick.png");
		var o = {
			image: img,
			x: 150,
			y: 50,
			speed: 10,
			alive: true,
			lives: 1
		}	

		o.disappear = function() {
			o.lives--;
			if(o.lives < 1) {
				o.alive = false;				
			}
			
		}

		return o;
	}