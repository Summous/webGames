class GameScence {
	constructor(game) {
		this.game = game;
		this.elements = [];
	}

	updata() {

	}

	draw() {
		for (var i = 0; i < this.elements.length; i++) {
			this.game.drawImage(this.elements[i]);
		}
		
	}

	addElements(elements) {
		this.elements.push(elements);
	}
}
