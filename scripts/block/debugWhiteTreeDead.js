const debugWhiteTreeDead = extendContent(Wall, "debugWhiteTreeDead", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugWhiteTreeDead")
		];
	},
	
});
debugWhiteTreeDead.health = 100;
debugWhiteTreeDead.size = 1;
debugWhiteTreeDead.category = Category.effect;
debugWhiteTreeDead.breakable = true;
debugWhiteTreeDead.floating = true;
debugWhiteTreeDead.update = true;
debugWhiteTreeDead.buildType = () => 
  extendContent(Wall.WallBuild, debugWhiteTreeDead, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.whiteTreeDead);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugWhiteTreeDead.buildVisibility = BuildVisibility.sandboxOnly;


