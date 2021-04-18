const debugSnowWall = extendContent(Wall, "debugSnowWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSnowWall")
		];
	},
	
});
debugSnowWall.health = 100;
debugSnowWall.size = 1;
debugSnowWall.category = Category.effect;
debugSnowWall.breakable = true;
debugSnowWall.floating = true;
debugSnowWall.update = true;
debugSnowWall.buildType = () => 
  extendContent(Wall.WallBuild, debugSnowWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.snowWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSnowWall.buildVisibility = BuildVisibility.sandboxOnly;


