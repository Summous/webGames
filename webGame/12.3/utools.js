	var log = console.log.bind(console);




	function imagePath(path) {
		var img = new Image();
		img.src = path;
		return img;
	}

	//碰撞检测
   function collide(a, b) {
		if((a.x < b.x + b.width && a.x + a.width > b.x ) 
			&& (a.y < b.y + b.height && a.y + a.width > b.y)) {
			return true;
		}
		return false;
	}	
