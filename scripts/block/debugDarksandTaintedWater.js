const debugDarksandTaintedWater = extendContent(Wall, "debugDarksandTaintedWater", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarksandTaintedWater")
		];
	},
	
});
debugDarksandTaintedWater.health = 100;
debugDarksandTaintedWater.size = 1;
debugDarksandTaintedWater.category = Category.effect;
debugDarksandTaintedWater.breakable = true;
debugDarksandTaintedWater.floating = true;
debugDarksandTaintedWater.update = true;
debugDarksandTaintedWater.buildType = () => 
  extendContent(Wall.WallBuild, debugDarksandTaintedWater, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.darksandTaintedWater);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarksandTaintedWater.buildVisibility = BuildVisibility.sandboxOnly;


