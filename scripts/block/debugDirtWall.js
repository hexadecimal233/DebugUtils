const debugDirtWall = extendContent(Wall, "debugDirtWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDirtWall")
		];
	},
	
});
debugDirtWall.health = 100;
debugDirtWall.size = 1;
debugDirtWall.category = Category.effect;
debugDirtWall.breakable = true;
debugDirtWall.floating = true;
debugDirtWall.update = true;
debugDirtWall.buildType = () => 
  extendContent(Wall.WallBuild, debugDirtWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.dirtWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDirtWall.buildVisibility = BuildVisibility.sandboxOnly;


