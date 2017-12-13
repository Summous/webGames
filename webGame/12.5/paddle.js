	var Paddle = function() {
		//
		var image = imagePath("paddle.png");
		var o = {
			image: image,
			x: 120,
			y: 260,
			height: 27, 
			width:  172,
			speed: 10	
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