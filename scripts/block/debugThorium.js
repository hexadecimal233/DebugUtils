const debugThorium = extendContent(Wall, "debugThorium", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugThorium")
		];
	},
	
});
debugThorium.health = 100;
debugThorium.size = 1;
debugThorium.category = Category.effect;
debugThorium.breakable = true;
debugThorium.floating = true;
debugThorium.update = true;
debugThorium.buildType = () => 
  extendContent(Wall.WallBuild, debugThorium, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setOverlay(Blocks.oreThorium);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugThorium.buildVisibility = BuildVisibility.sandboxOnly;


