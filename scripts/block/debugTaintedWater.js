const debugTaintedWater = extendContent(Wall, "debugTaintedWater", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugTaintedWater")
		];
	},
	
});
debugTaintedWater.health = 100;
debugTaintedWater.size = 1;
debugTaintedWater.category = Category.effect;
debugTaintedWater.breakable = true;
debugTaintedWater.floating = true;
debugTaintedWater.update = true;
debugTaintedWater.buildType = () => 
  extendContent(Wall.WallBuild, debugTaintedWater, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.taintedWater);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugTaintedWater.buildVisibility = BuildVisibility.sandboxOnly;


