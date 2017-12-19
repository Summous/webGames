	function __main() {
    	//
    	var images = {
    		ball: "Ball.png",
    		brick: "Brick.png",
    		paddle: "Paddle.png"
    	}
    	
    	//由于js载入图片是异步的，所以要用到回调函数
    	//执行顺序：载入图片->回调函数初始化scence->执行runloop()
    	var game = Game(images, function(scence) {
    		var scence = Scence(game);
    		game.runWithScence(scence); 		
    	});
    	
    	//调试Debug
		enableDebug(game, true);
	}

    __main();