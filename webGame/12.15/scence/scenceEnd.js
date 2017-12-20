var ScenceEnd = function(game) {
	var o = {
		game: game
	}

	o.update = function() {
		return;	
	}

	game.resgisterEvent("r", function(event) {
		var scence_title = ScenceTitle(game);
		game.repalceScence(scence_title);
	
	});

	o.draw = function() {
		game.context.clearRect(0, 0, 400, 300);
		game.context.fillText("游戏结束,按r键重新开始游戏", 130, 160);
		return;
	
	}

	return o;
}