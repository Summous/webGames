	var log = console.log.bind(console);
	var pause = true;

	function imagePath(path) {
		var img = new Image();
		img.src = path;
		return img;
	}

	//碰撞检测
   function collide(a, b) {
		if((a.x < b.x + b.image.width && a.x + a.image.width > b.x ) 
			&& (a.y < b.y + b.image.height && a.y + a.image.height > b.y)) {
			return true;
		}
		return false;
	}	

	//暂停
	window.addEventListener("keydown", function(event) {
		if(event.key == "p") {
			pause = !pause;	
		}		
	});

	



