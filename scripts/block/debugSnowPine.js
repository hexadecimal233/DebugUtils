const debugSnowPine = extendContent(Wall, "debugSnowPine", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSnowPine")
		];
	},
	
});
debugSnowPine.health = 100;
debugSnowPine.size = 1;
debugSnowPine.category = Category.effect;
debugSnowPine.breakable = true;
debugSnowPine.floating = true;
debugSnowPine.update = true;
debugSnowPine.buildType = () => 
  extendContent(Wall.WallBuild, debugSnowPine, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.snowPine);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSnowPine.buildVisibility = BuildVisibility.sandboxOnly;


