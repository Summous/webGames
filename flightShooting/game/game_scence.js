class GameScence {
	constructor(game) {
		this.game = game;
<<<<<<< HEAD
		this.elements = [];
	}

	updata() {
=======
		this.debugModeEabled = true;
		this.elements = [];
	}

	update() {
		// log(this.elements)
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
>>>>>>> dev

	}

	draw() {
		for (var i = 0; i < this.elements.length; i++) {
<<<<<<< HEAD
			this.game.drawImage(this.elements[i]);
		}
		
	}

	addElements(elements) {
		this.elements.push(elements);
=======
			var b = this.elements[i];
			this.game.drawImage(b);
		}
	}

	addElements(img) {
		img.scence = this;
		this.elements.push(img);
>>>>>>> dev
	}
}
