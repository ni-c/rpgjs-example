/**
* Load and configure RequireJS
* @see http://requirejs.org/docs/node.html
*/
var requirejs = require('requirejs');
requirejs.config({
  nodeRequire: require
});

requirejs(['./rpgjs'], function(rpgjs) {
	rpgjs.onConnect(1337, function(rpg) {
	  rpg.start(function() {
			rpg.loadMap('map', {
				tileset: 'grassland.png',
				autotiles: ['grassland1.png','grassland2.png','grassland3.png','grassland4.png'],
				player:  {
		  		speedAnimation: 10,
	  			speed: 10,
					x: 12, 
					y: 8, 
					filename: 'fighter.png'
				}
		  }, function() {
		
		 	});
		});
	});
});
