class ScenceEnd extends GameScence {
	constructor(game) {
		super(game);
		this.game.resgisterEvent("r", (event) => {
			var scence_title = Scence(this.game);
			this.game.repalceScence(scence_title);
		});
	}

	update() {
		return;
	}

	draw() {
		this.game.context.clearRect(0, 0, 400, 300);
		this.game.context.fillText("游戏结束,按r键重新开始游戏", 130, 160);
		return;
	}
}
