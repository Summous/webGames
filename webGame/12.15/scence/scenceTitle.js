var ScenceTitle = function(game) {
	var o = {
		game: game
	}

	o.update = function() {
		return;	
	}

	game.resgisterEvent("k", function(event) {
		var scence = Scence(game);
		game.repalceScence(scence);
	
	});


	o.draw = function() {
		game.context.clearRect(0, 0, 400, 300);
		game.context.fillText("欢迎来到游戏！按k键开始游戏", 120, 160);
		return;
	}

	return o;
}