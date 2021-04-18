const debugDuneWall = extendContent(Wall, "debugDuneWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDuneWall")
		];
	},
	
});
debugDuneWall.health = 100;
debugDuneWall.size = 1;
debugDuneWall.category = Category.effect;
debugDuneWall.breakable = true;
debugDuneWall.floating = true;
debugDuneWall.update = true;
debugDuneWall.buildType = () => 
  extendContent(Wall.WallBuild, debugDuneWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.duneWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDuneWall.buildVisibility = BuildVisibility.sandboxOnly;


