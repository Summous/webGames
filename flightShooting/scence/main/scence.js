const config = {
	player_speed: 10
}
class Player extends GameImage {
	constructor(game, name) {
		super(game, name);
		this.init();
	}

	init() {
		this.speed = 8;
	    this.x = 100;
		this.y = 500;
		this.cooldown = 10;
	}
	update() {
		this.speed = config.player_speed;
		if(this.cooldown > 0) {
			this.cooldown --;
		}
	}
	fire() {
		if(this.cooldown == 0) {
			this.cooldown = 9
			var bullet = new Bullet(this.game, "bullet");
			bullet.x = this.x + (this.w - bullet.w)/2;
			bullet.y = this.y;
			this.scence.addElements(bullet)	//			
		}		
	}

	moveLeft() {
		this.x -= this.speed;
	}
	
	moveRight() {
		this.x += this.speed;	
	}

	moveUp() {
		this.y -= this.speed;
	}

	moveDown() {
		this.y += this.speed;
	}
}

class Enemy extends GameImage {
	constructor(game, name) {
		super(game, name);
		this.init();
	}

	init() {
		this.speed = RandomBetween(1,3);
		this.x = RandomBetween(0,300);
		this.y = -RandomBetween(0,100);
	}

	update() {
		this.y += this.speed;
		if(this.y > 450) {
			this.init();
			this.y = 0;
		}
	}
}

class Cloud extends GameImage {
	constructor(game, name) {
		super(game, name);
		this.init();
	}

	init() {
		this.speed = RandomBetween(2,4);
		this.x = RandomBetween(0,300);
		this.y = -RandomBetween(0,200);
	}

	update() {
		this.y += this.speed;
		if(this.y > 450) {
			this.init();
			this.y = 0;
		}
	}
}

class Bullet extends GameImage {
	constructor(game, name) {
		super(game, name);
		this.init();
	}

	init() {
		this.speed = 5;
	}

	update() {
		this.y -= this.speed;
	}
}

class Scence extends GameScence {
	constructor(game) {
		super(game);
		this.init();
		this.setup();	
		this.addEnemy();
	}

	update() {
		super.update();
	}

	init() {
		this.space = new GameImage(this.game, "space");
		this.cloud = new Cloud(this.game, "cloud");
	    this.player = new Player(this.game, "player");

	    this.addElements(this.space);
	    this.addElements(this.cloud);
	    this.addElements(this.player);

	}

	addEnemy() {
			var enemyNumbers = 5;
			this.enemy = [];
		    for (var i = 0; i < enemyNumbers; i++) {
		    	var enemyName = "enemy" + RandomBetween(1,5);
		    	var enemy = new Enemy(this.game, enemyName)
		    	this.addElements(enemy);
		    	this.elements.push(enemy)
		    }
	}

	setup() {
		var s = this;

		this.game.resgisterEvent("a", function() {
			s.player.moveLeft();
		});

		this.game.resgisterEvent("d", function() {
			s.player.moveRight();s
		});

		this.game.resgisterEvent("w", function() {
			s.player.moveUp();
		});

		this.game.resgisterEvent("s", function() {
			s.player.moveDown();
		});

		this.game.resgisterEvent("j", function() {
			s.player.fire();	    	
		});
	}

}

// var Scence = function(game) {
// 	var o = {
// 		game: game
// 	}

// 	var paddle = Paddle(game);
// 	var ball =  Ball(game);
//     bricks = loadLevel(game, levels);
//     //
//     var lives = 0;
//     var score = 0;

// 	o.update = function() {
// 		if(!pause) {
// 			return;
// 		}

// 		ball.move();

// 		if(ball.y > paddle.y) {
// 			//游戏结束
// 			var scence_end = new ScenceEnd(game);
// 			game.repalceScence(scence_end);
// 		}

// 		if(ball.collide(paddle)) {
// 			ball.reverse();
// 		}

// 		for(var i = 0; i < bricks.length; i ++) {
// 			////关卡结束
// 			if(bricks[i].lives == 0) {	
// 				lives += 1;
// 				if(lives == bricks.length) {
// 					var level_scence = new levelScence(game);
// 					game.repalceScence(level_scence);
// 					levels < 4 ? levels++ : levels = 1
// 				}
// 			}

// 			if(ball.collide(bricks[i])) {
// 				bricks[i].disappear();
// 				if(bricks[i].alive) {
// 					ball.reverse();
// 				}else if(bricks[i].lives == 0) {
// 					game.score += 100;
// 				}
// 			}			
// 		}
// 	}

// 	o.draw = function() {
// 		game.drawImage(paddle);
// 		game.drawImage(ball);

// 		for(var i = 0; i < bricks.length; i++) {
// 			if(bricks[i].alive) {
// 				game.drawImage(bricks[i]);	
// 			}
// 		}			
// 	}

// 	game.resgisterEvent("a", function(event) {
// 		paddle.moveLeft();
// 	});

// 	game.resgisterEvent("d", function(event) {
// 		paddle.moveRight();
// 	});

// 	game.resgisterEvent("f", function(event) {
// 		ball.fireBall();
// 	});

// 	//暂停时小球跟随鼠标移动
// 	// window.addEventListener("click", function(event) {
// 	// 	if(!pause) {
// 	// 		ball.x = event.offsetX;
// 	// 		ball.y = event.offsetY;	
// 	// 	}
// 	// });

// 	//升级版：单击控制小球进行拖拽
// 	var move = false;
// 	window.addEventListener("mousedown", function(event) {
// 		if(event.offsetX > ball.x && event.offsetX < ball.x + ball.image.width) {
// 			if(event.offsetY > ball.y && event.offsetY < ball.y + ball.image.height) {
// 				move = !move;
// 			}
// 		}else if(move) {
// 			move = false;
// 		}
// 	});

// 	window.addEventListener("mousemove", function(event) {
// 		if(move) {
// 			ball.x = event.offsetX;
// 			ball.y = event.offsetY;	
// 		}
// 	});

// 	return o;
// }