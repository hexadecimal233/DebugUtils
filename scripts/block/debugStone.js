const debugStone = extendContent(Wall, "debugStone", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugStone")
		];
	},
	
});
debugStone.health = 100;
debugStone.size = 1;
debugStone.category = Category.effect;
debugStone.breakable = true;
debugStone.floating = true;
debugStone.update = true;
debugStone.buildType = () => 
  extendContent(Wall.WallBuild, debugStone, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.stone);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugStone.buildVisibility = BuildVisibility.sandboxOnly;


