const debugHotrock = extendContent(Wall, "debugHotrock", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugHotrock")
		];
	},
	
});
debugHotrock.health = 100;
debugHotrock.size = 1;
debugHotrock.category = Category.effect;
debugHotrock.breakable = true;
debugHotrock.floating = true;
debugHotrock.update = true;
debugHotrock.buildType = () => 
  extendContent(Wall.WallBuild, debugHotrock, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.hotrock);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugHotrock.buildVisibility = BuildVisibility.sandboxOnly;


