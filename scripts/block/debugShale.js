const debugShale = extendContent(Wall, "debugShale", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugShale")
		];
	},
	
});
debugShale.health = 100;
debugShale.size = 1;
debugShale.category = Category.effect;
debugShale.breakable = true;
debugShale.floating = true;
debugShale.update = true;
debugShale.buildType = () => 
  extendContent(Wall.WallBuild, debugShale, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.shale);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugShale.buildVisibility = BuildVisibility.sandboxOnly;


