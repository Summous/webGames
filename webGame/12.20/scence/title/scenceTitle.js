class ScenceTitle extends GameScence {
	constructor(game) {
		super(game);
		this.game.resgisterEvent("k", (event) => {
			var scence = Scence(this.game);
			this.game.repalceScence(scence);
		});
	}

	update() {
		return;
	}

	draw() {
		this.game.context.clearRect(0, 0, 400, 300);
		this.game.context.fillText("欢迎来到游戏！按k键开始游戏", 120, 160);
		return;
	}
}
