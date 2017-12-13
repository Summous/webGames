	var Brick = function() {
		//
	    var image = imagePath("Brick.png");
		var o = {
			image: image,
			x: 150,
			y: 50,
			height: 29, 
			width:  46,
			speed: 10,
			alive: false
		}	

		o.disappear = function() {
			o.alive = true;
		}

		return o;
	}