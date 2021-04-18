const debugDeepwater = extendContent(Wall, "debugDeepwater", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDeepwater")
		];
	},
	
});
debugDeepwater.health = 100;
debugDeepwater.size = 1;
debugDeepwater.category = Category.effect;
debugDeepwater.breakable = true;
debugDeepwater.floating = true;
debugDeepwater.update = true;
debugDeepwater.buildType = () => 
  extendContent(Wall.WallBuild, debugDeepwater, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.deepwater);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDeepwater.buildVisibility = BuildVisibility.sandboxOnly;


