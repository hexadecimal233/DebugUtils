const debugPine = extendContent(Wall, "debugPine", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugPine")
		];
	},
	
});
debugPine.health = 100;
debugPine.size = 1;
debugPine.category = Category.effect;
debugPine.breakable = true;
debugPine.floating = true;
debugPine.update = true;
debugPine.buildType = () => 
  extendContent(Wall.WallBuild, debugPine, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.pine);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugPine.buildVisibility = BuildVisibility.sandboxOnly;


