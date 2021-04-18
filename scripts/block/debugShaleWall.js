const debugShaleWall = extendContent(Wall, "debugShaleWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugShaleWall")
		];
	},
	
});
debugShaleWall.health = 100;
debugShaleWall.size = 1;
debugShaleWall.category = Category.effect;
debugShaleWall.breakable = true;
debugShaleWall.floating = true;
debugShaleWall.update = true;
debugShaleWall.buildType = () => 
  extendContent(Wall.WallBuild, debugShaleWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.shaleWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugShaleWall.buildVisibility = BuildVisibility.sandboxOnly;


