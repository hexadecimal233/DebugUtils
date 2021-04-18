const debugCliff = extendContent(Wall, "debugCliff", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugCliff")
		];
	},
	
});
debugCliff.health = 100;
debugCliff.size = 1;
debugCliff.category = Category.effect;
debugCliff.breakable = true;
debugCliff.floating = true;
debugCliff.update = true;
debugCliff.buildType = () => 
  extendContent(Wall.WallBuild, debugCliff, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.cliff);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugCliff.buildVisibility = BuildVisibility.sandboxOnly;


