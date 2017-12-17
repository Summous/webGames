	function __main() {
    	//
    	var images = {
    		ball: "Ball.png",
    		brick: "Brick.png",
    		paddle: "Paddle.png"
    	}
    	
    	var game = Game(images, function() {
    		var scence = Scence(game);
    		game.runCallback(scence)
    		
    	});
    	
    	
    	

    	//调试Debug
		enableDebug(game, true);
	
	}

    __main();