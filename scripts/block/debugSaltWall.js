const debugSaltWall = extendContent(Wall, "debugSaltWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSaltWall")
		];
	},
	
});
debugSaltWall.health = 100;
debugSaltWall.size = 1;
debugSaltWall.category = Category.effect;
debugSaltWall.breakable = true;
debugSaltWall.floating = true;
debugSaltWall.update = true;
debugSaltWall.buildType = () => 
  extendContent(Wall.WallBuild, debugSaltWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.saltWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSaltWall.buildVisibility = BuildVisibility.sandboxOnly;


