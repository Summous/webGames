	var Ball = function(game) {
		//
		var img = game.loadImageByName("ball");
		var o = {
			image: img,
			x: 130,
			y: 252,
			speedX: 4,
			speedY: 7,
			fire: false
		}

		o.fireBall = function() {
			o.fire = true;
		}

		o.reverse = function() {
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

		//ball与paddle，brick碰撞检测
		o.collide= function(paddle) {
				if((o.x < paddle.x + paddle.image.width && o.x + o.image.width > paddle.x ) 
					&& (o.y < paddle.y + paddle.image.height && o.y + o.image.height > paddle.y)) {
					return true;
				}
				return false;
			}	
			
		return o;		
	}