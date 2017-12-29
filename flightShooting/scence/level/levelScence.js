class levelScence extends GameScence {
	constructor(game) {
		super(game);
		this.game.resgisterEvent("l", (event) => {
			var scence = Scence(this.game);
			this.game.repalceScence(scence);
		});
	}

	update() {
		return;
	}

	draw() {
		this.game.context.clearRect(0, 0, 400, 300);
		this.game.context.font = "18px serif";
		this.game.context.fillText("按L键开启下一关", 120, 160);
		return;
	}
}
