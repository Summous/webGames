		class Game {
		//images 是一个对象，里面包含图片的名字和路径，
		//用于预先加载图片
		constructor(images, runCallback) {
			this.scence = null;
			this.keydown =  {};
			this.actions =  {};
			this.images =  images;
			this.canvas = document.querySelector("#id_canvas");
			this.context = this.canvas.getContext("2d");
			//初始化得分
			this.score = Number(0);
			this.runCallback = runCallback;

			var self = this;
			window.addEventListener("keydown", function(event) {
				self.keydown[event.key] = true;
			});

			window.addEventListener("keyup", function(event) {
				self.keydown[event.key] = false;
			});

			this.init();
		}

		drawImage(img) {
			this.context.drawImage(img.img, img.x, img.y);
		}

		resgisterEvent(key, callback) {
			this.actions[key] = callback;
		}

		//
		update() {
			this.scence.update();
		}

		draw() {
			this.scence.draw();
		}	

		init() {
	        //预先加载图片：由于JS中图片是异步加载的，
	        //所以要在runloop()运行前加载完全部图片

<<<<<<< HEAD
	        //原方法
	        // var o = this;
	        // var loads = [];
	        // var name = Object.keys(o.images);
			// for (var i = 0; i < name.length; i++) {
			// 	let img = new Image();
			// 	var p = name[i];
			// 	img.src = o.images[p];
			// 	o.images[p] = img;
			// 	img.onload = function() {
			// 		loads.push(i);
			// 		if(loads.length == name.length) {
			// 			o.run();
			// 		}
			// 	}
			// }

			//promise 方法
			var o = this;
			var	img = [];
			var name = Object.keys(o.images);
			for(var i = 0; i < name.length; i++) {
				img.push(o.images[name[i]]);
			}

			const preloadImage = function(path) {
				return new Promise(function(resolve, reject) {
					let image = new Image();
					image.onload =resolve(image);
					image.src = path;
				});
			};

			for(let i = 0; i < img.length; i++) {
				var times = 1;
				preloadImage(img[i]).then(function(image){		
					o.images[name[i]] = image;
					if(times == 3){
						o.run()	
					}
					times++;
				});	
			}
=======
	        // 原方法
	        var o = this;
	        var loads = [];
	        var name = Object.keys(o.images);
			for (var i = 0; i < name.length; i++) {
				let img = new Image();
				var p = name[i];
				img.src = o.images[p];
				o.images[p] = img;
				img.onload = function() {
					loads.push(i);
					if(loads.length == name.length) {
						o.run();
					}
				}
			}
		

		//promise 方法
		// 	var o = this;
		// 	var	img = [];
		// 	var name = Object.keys(o.images);
		// 	for(var i = 0; i < name.length; i++) {
		// 		img.push(o.images[name[i]]);
		// 	}
		// 	log(img)
		// 	const preloadImage = function(path) {
		// 		return new Promise(function(resolve, reject) {
		// 			let image = new Image();
		// 			image.onload =resolve(image);
		// 			image.src = path;
		// 		});
		// 	};

		// 	for(let i = 0; i < img.length; i++) {
		// 		var times = 1;
		// 		preloadImage(img[i]).then(function(image){		
		// 			o.images[name[i]] = image;
		// 			if(times == 3){
		// 				o.run()	
		// 			}
		// 			times++;
		// 		});	
		// 	}
		
>>>>>>> dev
		}

	
		loadImageByName(image) {
			return this.images[image];
		}

		repalceScence(scence) {
			this.scence = scence;
		}

		runWithScence(scence) {
			var o = this;
			o.scence = scence;
			//使用setTimeout，避免setInterval在重复定时器时出现问题
			setTimeout(function() {
				o.runloop();
			}, 1000/fps)
		}

		run() {
			this.runCallback(this.scence);
		}

		runloop() {
			var o = this;
			var actions = Object.keys(o.actions);
			for(var i = 0; i < actions.length; i++) {
				var key = actions[i];
				if(o.keydown[key]) {
					//
					o.actions[key]();
				} 
			}

			o.update();
			
<<<<<<< HEAD
			if(!"1234678".includes(levels)) {
				o.score = 0;
			}

			o.context.clearRect(0, 0, 400, 300);
			o.context.font = "10px serif";
			o.context.fillText('得分：' + o.score, 10, 290);
=======
			// o.context.clearRect(0, 0, 400, 300);
			// o.context.font = "10px serif";
			// o.context.fillText('得分：' + o.score, 10, 290);
>>>>>>> dev

			// //绘制背景
			// o.context.fillStyle = '#fff';
			// o.context.fillRect(0, 0, 400, 300);
			
			o.draw();

			setTimeout(function() {
				o.runloop();
			}, 1000/fps)
		}
	}
