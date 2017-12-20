	function __main() {
    	//
    	var images = {
    		ball: "img/Ball.png",
    		brick: "img/Brick.png",
    		paddle: "img/Paddle.png"
    	}
    	
    	//由于js载入图片是异步的，所以要用到回调函数
    	//执行顺序：载入图片->回调函数初始化scence->执行runloop()
    	var game = Game(images, function(scence) {
    		var scence_title = ScenceTitle(game);
    		game.runWithScence(scence_title); 		
    	});
    	
    	//调试Debug
		enableDebug(game, true);
	}

    __main();