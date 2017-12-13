	function __main() {
		var paddle = Paddle();
    	var ball =  Ball();
    	var game = Game();
	    bricks = loadLevel(3);
		//
		enableDebug(true);

		game.update = function() {
			if(!pause) {
				return;
			}

			ball.move();

			if(ball.collide(paddle)) {
				ball.reverse();
			}
			for(var i = 0; i < bricks.length; i ++) {		
				if(ball.collide(bricks[i])) {
					bricks[i].disappear();
					if(bricks[i].alive) {
						ball.reverse();
						game.score += 100;
					}
				}			
			}
		}

		game.draw = function() {
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

		game.resgisterEvent("k", function(event) {
			ball.fireBall();
		});

		window.addEventListener("click", function(event) {
			if(!pause) {
				ball.x = event.offsetX;
				ball.y = event.offsetY;	
			}
		});

	}

    __main();