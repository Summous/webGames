	var Ball = function() {
		//
		var image = imagePath("ball.png");
		var o = {
			image: image,
			x: 130,
			y: 240,
			width: 20,
			height:18 ,
			speedX: 3,
			speedY: 4,
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

			if(o.x < 0 || o.x > 400){
				o.speedX *= -1;
			}else if(o.y < 0 || o.y > 300){
				o.speedY *= -1;
			}

			o.x -= o.speedX;
			o.y -= o.speedY;
		}

		return o;		
	}