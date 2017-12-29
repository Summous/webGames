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
		levels = 1;
		this.game.context.clearRect(0, 0, 400, 300);
		this.game.context.font = "18px serif";
		this.game.context.fillText("游戏结束,按r键重新开始游戏", 70, 160);
		return;
	}
}
