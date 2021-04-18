const debugSandWater = extendContent(Wall, "debugSandWater", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSandWater")
		];
	},
	
});
debugSandWater.health = 100;
debugSandWater.size = 1;
debugSandWater.category = Category.effect;
debugSandWater.breakable = true;
debugSandWater.floating = true;
debugSandWater.update = true;
debugSandWater.buildType = () => 
  extendContent(Wall.WallBuild, debugSandWater, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.sandWater);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSandWater.buildVisibility = BuildVisibility.sandboxOnly;


