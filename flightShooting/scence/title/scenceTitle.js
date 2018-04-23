class ScenceTitle extends GameScence {
	constructor(game) {
		super(game);
		this.game.resgisterEvent("k", (event) => {
			var scence = new Scence(this.game);
			this.game.repalceScence(scence);
		});
	}

	update() {
		return;
		
	}

	draw() {
		this.game.context.clearRect(0, 0, 400, 600);
		this.game.context.font = "18px serif";
		this.game.context.fillText("W A S D 控制方向 J 发射导弹", 70, 140);
		this.game.context.fillText("欢迎来到游戏！按k键开始游戏", 70, 200);
		return;
	}
}
