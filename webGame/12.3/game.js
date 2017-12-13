	var Game = function() {
		var o = {
			keydown: {},
			actions: {}
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

		setInterval(function(){
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

		},1000/60);

		return o;
	}