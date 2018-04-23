	function __main() {
    	//
    	var images = {
    		cloud: "img/cloud.png",
    		space: "img/space.png",
<<<<<<< HEAD
    		player: "img/player.png"
=======
    		player: "img/player.png",
            bullet: "img/bullet.png",
            enemy1: "img/enemy1.png",
            enemy2: "img/enemy2.png",
            enemy3: "img/enemy3.png",
            enemy4: "img/enemy4.png",
            enemy5: "img/enemy5.png",
            boom: "img/boom.png"
>>>>>>> dev
    	}
    	
    	//由于js载入图片是异步的，所以要用到回调函数
    	//执行顺序：载入图片->回调函数初始化scence->执行runloop()
    	var game = new Game(images, function(scence) {
<<<<<<< HEAD
    		var scence = new Scence(game);
    		game.runWithScence(scence); 		
=======
    		var scenceTitle = new ScenceTitle(game);
    		game.runWithScence(scenceTitle); 		
>>>>>>> dev
    	});
    	
    	//调试Debug
		enableDebug(game, true);
	}

    __main();