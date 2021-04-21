const debugAir = extendContent(Wall, "debugAir", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugAir")
		];
	},
	
});
debugAir.health = 100;
debugAir.size = 1;
debugAir.category = Category.effect;
debugAir.breakable = true;
debugAir.floating = true;
debugAir.update = true;

debugAir.buildType = () => 
  extendContent(Wall.WallBuild, debugAir, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setOverlay(Blocks.air);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugAir.buildVisibility = BuildVisibility.sandboxOnly;


