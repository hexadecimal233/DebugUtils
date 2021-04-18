const debugSandWall = extendContent(Wall, "debugSandWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSandWall")
		];
	},
	
});
debugSandWall.health = 100;
debugSandWall.size = 1;
debugSandWall.category = Category.effect;
debugSandWall.breakable = true;
debugSandWall.floating = true;
debugSandWall.update = true;
debugSandWall.buildType = () => 
  extendContent(Wall.WallBuild, debugSandWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.sandWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSandWall.buildVisibility = BuildVisibility.sandboxOnly;


