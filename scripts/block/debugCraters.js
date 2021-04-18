const debugCraters = extendContent(Wall, "debugCraters", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugCraters")
		];
	},
	
});
debugCraters.health = 100;
debugCraters.size = 1;
debugCraters.category = Category.effect;
debugCraters.breakable = true;
debugCraters.floating = true;
debugCraters.update = true;
debugCraters.buildType = () => 
  extendContent(Wall.WallBuild, debugCraters, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.craters);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugCraters.buildVisibility = BuildVisibility.sandboxOnly;


