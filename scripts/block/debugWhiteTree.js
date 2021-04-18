const debugWhiteTree = extendContent(Wall, "debugWhiteTree", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugWhiteTree")
		];
	},
	
});
debugWhiteTree.health = 100;
debugWhiteTree.size = 1;
debugWhiteTree.category = Category.effect;
debugWhiteTree.breakable = true;
debugWhiteTree.floating = true;
debugWhiteTree.update = true;
debugWhiteTree.buildType = () => 
  extendContent(Wall.WallBuild, debugWhiteTree, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.whiteTree);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugWhiteTree.buildVisibility = BuildVisibility.sandboxOnly;


