const debugDaciteWall = extendContent(Wall, "debugDaciteWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDaciteWall")
		];
	},
	
});
debugDaciteWall.health = 100;
debugDaciteWall.size = 1;
debugDaciteWall.category = Category.effect;
debugDaciteWall.breakable = true;
debugDaciteWall.floating = true;
debugDaciteWall.update = true;
debugDaciteWall.buildType = () => 
  extendContent(Wall.WallBuild, debugDaciteWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.daciteWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDaciteWall.buildVisibility = BuildVisibility.sandboxOnly;


