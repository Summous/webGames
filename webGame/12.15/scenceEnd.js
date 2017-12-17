var ScenceEnd = function(game) {
	var o = {
		game: game
	}

	o.update = function() {
		return;	
	}

	o.draw = function() {
		log("end")
		//游戏结束
		game.context.clearRect(0, 0, 400, 300);
		game.context.fillText("游戏结束", 160, 180);
		return;
	
	}

	return o;
}