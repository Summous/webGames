<<<<<<< HEAD
=======
const config = {
	player_speed: 10,
	cloud_speed: 4,
	bullet_speed: 4,
}
var global = {
	score: 0
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
		if(this.cooldown > 0) {
			this.cooldown --;
		}
	}

	debug() {
		this.speed = config.player_speed;
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
		this.speed = RandomBetween(4,6);
		this.x = RandomBetween(0,300);
		this.y = -RandomBetween(0,300);
	}

	update() {
		this.y += this.speed;
		if(this.y > 550) {
			this.init();
			this.y = 0;
			//
			var scenceEnd = new ScenceEnd(this.game);
		    this.game.repalceScence(scenceEnd)
		}

	}

	boom() {
		var boom = new Boom(this.game, "boom");
		boom.x = this.x;
		boom.y = this.y;
		this.scence.addElements(boom)
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

	debug() {
		this.speed = config.cloud_speed;;
	}

	update() {
		this.y += this.speed;
		if(this.y > 450) {
			this.init();
			this.y = 0;
		}
	}
}

class Boom extends GameImage {
	constructor(game, name) {
		super(game, name);
		this.init();
	}

	init() {

	}

	debug() {

	}

	update() {
		
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

	debug() {
		this.speed = config.bullet_speed;
	}
}


>>>>>>> dev
class Scence extends GameScence {
	constructor(game) {
		super(game);
		this.init();
<<<<<<< HEAD
	}

	update() {
			// this.game.resgisterEvent("a", function(event) {
			// 	this.player.moveLeft();
			// });

			// this.game.resgisterEvent("d", function(event) {
			// 	this.player.moveRight();
			// });

		// 	game.resgisterEvent("f", function(event) {
		// 		ball.fireBall();
		// 	});
		this.cloud.y += 1;
		if(this.cloud.y > 450) {
			this.cloud.y = 0;
		}
		
	}

	init() {
		this.sky = new GameImage(this.game, "space")
		this.player = new GameImage(this.game, "player")
		this.cloud = new GameImage(this.game, "cloud")
	    this.player.x = 100;
		this.player.y = 500;
		this.player.w = 10;
	    this.player.h = 10;

	    this.addElements(this.sky);
	    this.addElements(this.player);
	    this.addElements(this.cloud);
	}

	// draw() {
	// 	this.game.drawImage(this.sky);
	// 	this.game.drawImage(this.player);
	// }
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
=======
		this.setup();	
		this.addEnemy();
		this.boomdown = 20;
		this.gameover = false;
		this.score = 0;
	}

	update() {
		super.update();

	    this.crash(Player, Enemy);
	    this.crash(Bullet, Enemy);

	    if(!this.hasImg(Enemy)) {
	    	this.addEnemy();
	    }

	    if(this.boomdown > 0) {
	    	this.boomdown --;
	    }

	    if(this.boomdown == 0) {
	    	this.boomdown = 20;
	    	this.killBoom();
	    }

	    if(this.gameover) {
	    	this.gameOver();
	    }

	    global.score = this.score;

	}

	draw() {
		super.draw();
		this.game.context.fillStyle = "white";
		this.game.context.font = "18px serif";
		this.game.context.fillText("得分：" + this.score , 0, 580 );
	}

	init() {
		this.space = new GameImage(this.game, "space");
		this.cloud = new Cloud(this.game, "cloud");
	    this.player = new Player(this.game, "player");

	    this.addElements(this.space);
	    this.addElements(this.cloud);
		this.addElements(this.player);

	}

	gameOver() {
		var scenceEnd = new ScenceEnd(this.game);
		this.game.repalceScence(scenceEnd)
	}

	crash(player, target) {
		for (var i = 0; i < this.elements.length; i++) {
			if(this.elements[i].__proto__.constructor == player) {
				var p = this.elements[i];
				for (var j = 0; j < this.elements.length; j++) {
					if(this.elements[j].__proto__.constructor == target) {
						var t = this.elements[j];
						//
						if(this.collide(p, t)) {
							//
							if(player == Player) {		
								this.elements.splice(j, 1);
								this.gameover = true;
							}
							if(player == Bullet) {
								this.score +=100
								this.elements.splice(i, 1)
								this.elements.splice(j, 1);
							}
							t.boom();
						}
					}
				}
			}

		}
	}

	collide(player, target) {
		if((player.x < target.x + target.w && player.x + player.w > target.x ) 
			&& (player.y < target.y + target.h && player.y + player.h > target.y)) {
			// log(this.x - (crash.x + crash.w) ,(this.x + this.w) - crash.x )
			return true;
		}
		return false;
	}	


	addEnemy() {
		var enemyNumbers = 5;
		this.enemy = [];
	    for (var i = 0; i < enemyNumbers; i++) {
	    	var enemyName = "enemy" + RandomBetween(1,5);
	    	var enemy = new Enemy(this.game, enemyName)
	    	this.addElements(enemy);
	    	this.enemy = enemy;
	    }
	}

	killBoom() {
		for (var i = 0; i < this.elements.length; i++) {
			// log(this.elements[i].__proto__.constructor == Boom)
			if(this.elements[i].__proto__.constructor == Boom) {
				this.elements.splice(i,1)
			}	
		}
	}

	hasImg(type) {
		for (var i = 0; i < this.elements.length; i++) {
			if(this.elements[i].__proto__.constructor == type) {
				return true;
			}	
		}	  
		return false;
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
>>>>>>> dev
