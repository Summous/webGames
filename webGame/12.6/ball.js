	var Ball = function() {
		//
		var img = imagePath("ball.png");
		var o = {
			image: img,
			x: 130,
			y: 240,
			speedX: 4,
			speedY: 7,
			fire: false
		}

		o.fireBall = function() {
			o.fire = true;
		}

		o.reverse = function() {
			o.speedX *= 1;
			o.speedY *= -1;
		}

		o.move = function() {
			if(!o.fire) {
				return false;
			}

			if(o.x < 0 || o.x > 400 - o.image.width){
				o.speedX *= -1;
			}else if(o.y < 0 || o.y > 300 - o.image.height){
				o.speedY *= -1;
			}

			o.x -= o.speedX;
			o.y -= o.speedY;
		}

		return o;		
	}