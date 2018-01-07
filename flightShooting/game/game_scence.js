class GameScence {
	constructor(game) {
		this.game = game;
		this.debugModeEabled = true;
		this.elements = [];
	}

	update() {
		//debug:动态调整速度
		if(this.debugModeEabled) {
			for (var i = 0; i < this.elements.length; i++) {
				var a = this.elements[i];
				a.debug && a.debug();
			}	
		}

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
