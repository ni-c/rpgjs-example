var Rpg = require('rpgjs').onConnect(1337, function(rpg) {

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
