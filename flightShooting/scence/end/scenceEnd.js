class ScenceEnd extends GameScence {
	constructor(game) {
		super(game);
		this.game.resgisterEvent("r", (event) => {
<<<<<<< HEAD
			var scence_title = Scence(this.game);
			this.game.repalceScence(scence_title);
=======
			var scence = new Scence(this.game);
			this.game.repalceScence(scence);
>>>>>>> dev
		});
	}

	update() {
<<<<<<< HEAD
		return;
	}

	draw() {
		levels = 1;
		this.game.context.clearRect(0, 0, 400, 300);
		this.game.context.font = "18px serif";
		this.game.context.fillText("游戏结束,按r键重新开始游戏", 70, 160);
=======
	   return;
	}

	draw() {
		this.game.context.fillStyle = "black";
		this.game.context.clearRect(0, 0, 400, 600);
		this.game.context.font = "18px serif";
		this.game.context.fillText("你的得分： " + global.score, 70, 140);
		this.game.context.fillText("游戏结束,按r键重新开始游戏", 70, 200);
>>>>>>> dev
		return;
	}
}
