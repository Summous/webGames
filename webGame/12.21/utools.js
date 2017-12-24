	var log = console.log.bind(console);
	var pause = true;
	var fps = 30;
	var levels = 1;

	//加载关卡
	var loadLevel = function(game, n) {
		var bricks = [];
		n = n - 1;
		var p = level[n]
		for(var i = 0; i < p.length; i++) {
			var brick = new Brick(game);
			brick.x = p[i][0];
			brick.y = p[i][1];
			brick.lives = p[i][2];
			bricks.push(brick);
		}
		return bricks;
	}

	//Deubug时候使用
	function enableDebug(game, debug) {
		if(!debug) {
			return;
		}

		//设置关卡和暂停
		window.addEventListener("keydown", function(event) {
			if("1234567".includes(event.key)) {
				bricks = loadLevel(game, event.key)
			}else if(event.key == "p") {
				pause = !pause;	
			}
		});

		//fps控制
		document.querySelector("#id_range").addEventListener("input", function(event) {	
			if(event.target.value) {
				fps = event.target.value;
			}
		})
		
	}










