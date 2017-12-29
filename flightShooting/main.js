	function __main() {
    	//
    	var images = {
    		cloud: "img/cloud.png",
    		space: "img/space.png",
    		player: "img/player.png"
    	}
    	
    	//由于js载入图片是异步的，所以要用到回调函数
    	//执行顺序：载入图片->回调函数初始化scence->执行runloop()
    	var game = new Game(images, function(scence) {
    		var scence = new Scence(game);
    		game.runWithScence(scence); 		
    	});
    	
    	//调试Debug
		enableDebug(game, true);
	}

    __main();