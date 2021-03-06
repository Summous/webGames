	var Game = function() {
		var o = {
			keydown: {},
			actions: {},
		};

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

		//初始化得分
		o.score = Number(100);

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
			o.context.fillText('得分：' + o.score, 10, 290);
			o.draw();

			setTimeout(function() {
				runloop();
			}, 1000/fps)
		}

		//使用setTimeout，避免setInterval在重复定时器时出现问题
		setTimeout(function() {
			runloop();
		}, 1000/fps)


		return o;
	}