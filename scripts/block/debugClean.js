const debugClean = extendContent(Wall, "debugClean", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugClean")
		];
	},
	
});
debugClean.health = 100;
debugClean.size = 1;
debugClean.category = Category.effect;
debugClean.breakable = true;
debugClean.floating = true;
debugClean.update = true;

debugClean.buildType = () => 
  extendContent(Wall.WallBuild, debugClean, {
    placed() {
	  var x = this.tileX();
	  var y = this.tileY();
      var tile = Vars.world.tile(x, y);
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      var tile = Vars.world.tile(x-1, y-1);
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      var tile = Vars.world.tile(x-1, y);
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      var tile = Vars.world.tile(x-1, y+1);
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      var tile = Vars.world.tile(x, y-1);
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      var tile = Vars.world.tile(x, y+1);
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      var tile = Vars.world.tile(x+1, y-1);
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      var tile = Vars.world.tile(x+1, y);
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      var tile = Vars.world.tile(x+1, y+1);
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugClean.buildVisibility = BuildVisibility.sandboxOnly;


