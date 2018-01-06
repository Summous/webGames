class GameScence {
	constructor(game) {
		this.game = game;
		this.elements = [];
	}

	update() {
		for (var i = 0; i < this.elements.length; i++) {
			var a = this.elements[i];
			a.update();
		}

	}

	draw() {
		for (var i = 0; i < this.elements.length; i++) {
			var b = this.elements[i];
			this.game.drawImage(b);
		}
		
	}

	addElements(img) {
		img.scence = this;
		this.elements.push(img);
	}

	
}
