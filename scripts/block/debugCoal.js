const debugCoal = extendContent(Wall, "debugCoal", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugCoal")
		];
	},
	
});
debugCoal.health = 100;
debugCoal.size = 1;
debugCoal.category = Category.effect;
debugCoal.breakable = true;
debugCoal.floating = true;
debugCoal.update = true;
debugCoal.buildType = () => 
  extendContent(Wall.WallBuild, debugCoal, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
	  tile.setOverlay(Blocks.oreCoal);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugCoal.buildVisibility = BuildVisibility.sandboxOnly;


