class GameImage {
	constructor(game, name) {
		this.game = game;
		this.img = game.loadImageByName(name);
		this.x = 0;
		this.y = 0;
		this.w = this.img.width;
		this.h = this.img.height;

	}

	update() {
		

	}

	draw() {
		
	}
}
