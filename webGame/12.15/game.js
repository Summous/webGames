	var Game = function(images) {
		//images 是一个对象，里面包含图片的名字和路径，
		//用于预先加载图片
		var o = {
			keydown: {},
			actions: {},
			images: {}
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

        //预先加图片，由于JS中图片是异步加载的，
        //所以要在runloop()运行前加载完全部图片
        var loads = [];
        var name = Object.keys(images);
		for (var i = 0; i < name.length; i++) {
			let img = new Image();
			var p = name[i];
			img.src = images[p];
			o.images[p] = img;
			img.onload = function() {
				loads.push(i);
				if(loads.length == name.length) {
					o.run();
				}
			}
		}
	
		o.loadImageByName = function(image) {
			return o.images[image];
		}

		o.run = function() {
			//使用setTimeout，避免setInterval在重复定时器时出现问题
			setTimeout(function() {
				runloop();
			}, 1000/fps)
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
			o.context.fillText('得分：' + o.score, 10, 290);

			//绘制背景
			// o.context.fillStyle = '#fff';
			// o.context.fillRect(0, 0, 400, 300);
			
			o.draw();

			setTimeout(function() {
				runloop();
			}, 1000/fps)
		}

		return o;
	}