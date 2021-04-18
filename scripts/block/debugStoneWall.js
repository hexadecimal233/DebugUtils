const debugStoneWall = extendContent(Wall, "debugStoneWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugStoneWall")
		];
	},
	
});
debugStoneWall.health = 100;
debugStoneWall.size = 1;
debugStoneWall.category = Category.effect;
debugStoneWall.breakable = true;
debugStoneWall.floating = true;
debugStoneWall.update = true;
debugStoneWall.buildType = () => 
  extendContent(Wall.WallBuild, debugStoneWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.stoneWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugStoneWall.buildVisibility = BuildVisibility.sandboxOnly;


