	var Paddle = function() {
		//
		var img = imagePath("paddle.png");
		var o = {
			image: img,
			x: 120,
			y: 260,
			speed: 8
		}

		
		o.moveLeft = function() {
			if(o.x > 0) {
				o.x -= o.speed;	
			}	
		}

		o.moveRight = function() {
			if(o.x < 400 - o.image.width) {
				o.x += o.speed;	
			}
			
		}
		return o;		
	}