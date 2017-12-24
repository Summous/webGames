var Scence = function(game) {
	var o = {
		game: game
	}

	var paddle = Paddle(game);
	var ball =  Ball(game);
    bricks = loadLevel(game, levels);
    //
    var lives = 0;
    var score = 0;

	o.update = function() {
		if(!pause) {
			return;
		}

		ball.move();

		if(ball.y > paddle.y) {
			//游戏结束
			var scence_end = new ScenceEnd(game);
			game.repalceScence(scence_end);
		}

		if(ball.collide(paddle)) {
			ball.reverse();
		}

		for(var i = 0; i < bricks.length; i ++) {
			////关卡结束
			if(bricks[i].lives == 0) {	
				lives += 1;
				if(lives == bricks.length) {
					var level_scence = new levelScence(game);
					game.repalceScence(level_scence);
					levels < 4 ? levels++ : levels = 1
				}
			}

			if(ball.collide(bricks[i])) {
				bricks[i].disappear();
				if(bricks[i].alive) {
					ball.reverse();
				}else if(bricks[i].lives == 0) {
					game.score += 100;
				}
			}			
		}
	}

	o.draw = function() {
		game.drawImage(paddle);
		game.drawImage(ball);

		for(var i = 0; i < bricks.length; i++) {
			if(bricks[i].alive) {
				game.drawImage(bricks[i]);	
			}
		}			
	}

	game.resgisterEvent("a", function(event) {
		paddle.moveLeft();
	});

	game.resgisterEvent("d", function(event) {
		paddle.moveRight();
	});

	game.resgisterEvent("f", function(event) {
		ball.fireBall();
	});

	//暂停时小球跟随鼠标移动
	// window.addEventListener("click", function(event) {
	// 	if(!pause) {
	// 		ball.x = event.offsetX;
	// 		ball.y = event.offsetY;	
	// 	}
	// });

	//升级版：单击控制小球进行拖拽
	var move = false;
	window.addEventListener("mousedown", function(event) {
		if(event.offsetX > ball.x && event.offsetX < ball.x + ball.image.width) {
			if(event.offsetY > ball.y && event.offsetY < ball.y + ball.image.height) {
				move = !move;
			}
		}else if(move) {
			move = false;
		}
	});

	window.addEventListener("mousemove", function(event) {
		if(move) {
			ball.x = event.offsetX;
			ball.y = event.offsetY;	
		}
	});

	return o;
}