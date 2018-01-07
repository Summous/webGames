const config = {
	player_speed: 10,
	cloud_speed: 4,
	bullet_speed: 4,
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