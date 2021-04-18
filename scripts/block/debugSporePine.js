const debugSporePine = extendContent(Wall, "debugSporePine", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSporePine")
		];
	},
	
});
debugSporePine.health = 100;
debugSporePine.size = 1;
debugSporePine.category = Category.effect;
debugSporePine.breakable = true;
debugSporePine.floating = true;
debugSporePine.update = true;
debugSporePine.buildType = () => 
  extendContent(Wall.WallBuild, debugSporePine, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.sporePine);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSporePine.buildVisibility = BuildVisibility.sandboxOnly;


