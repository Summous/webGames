	var Game = function() {
		var o = {
			keydown: {},
			actions: {}
		};

		var fps = 30;

		o.canvas = document.querySelector("#id_canvas");
		o.context = o.canvas.getContext("2d");
		//
		o.drawImage = function (img) {
			o.context.drawImage(img.image, img.x, img.y);
		}
		
		window.addEventListener("keydown", function(event) {
			o.keydown[event.key] = true;
		});

		window.addEventListener("keyup", function(event) {
			o.keydown[event.key] = false;
		});

		o.resgisterEvent = function(key, callback) {
			o.actions[key] = callback;
		}

		function runloop() {
			var actions = Object.keys(o.actions);
			for(var i = 0; i < actions.length; i++) {
				var key = actions[i];
				if(o.keydown[key]) {
					o.actions[key]();
				} 
			}

			o.update();
			o.context.clearRect(0, 0, 400, 300);
			o.draw();

		}

		//使用setTimeout，避免setInterval在重复定时器时出现问题
		setTimeout(function() {
			runloop();
			setTimeout(arguments.callee, 1000/fps) //为啥只能用 arguments.callee ？
		}, 1000/fps)

		//fps控制
		document.querySelector("#id_range").addEventListener("change", function(event) {	
			if(event.target.value) {
				fps = event.target.value;
			}
			log("fps: ", fps)
		})

		return o;
	}