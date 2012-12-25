/**
* Load and configure RequireJS
* @see http://requirejs.org/docs/node.html
*/
var requirejs = require('requirejs');
requirejs.config({
  nodeRequire: require
});

requirejs(['rpgjs'], function(rpgjs) {
rpgjs.onConnect(1337, function(rpg) {

  rpg.start(function() {

    rpg.loadMap('map', {
      tileset : 'tiles.png',
      player : {
        x : 2,
        y : 3,
        filename : 'Hero.png'
      }
    }, function() {

    });
  });
});

});