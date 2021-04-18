const debugSpace = extendContent(Wall, "debugSpace", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSpace")
		];
	},
	
});
debugSpace.health = 100;
debugSpace.size = 1;
debugSpace.category = Category.effect;
debugSpace.breakable = true;
debugSpace.floating = true;
debugSpace.update = true;
debugSpace.buildType = () => 
  extendContent(Wall.WallBuild, debugSpace, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.space);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSpace.buildVisibility = BuildVisibility.sandboxOnly;


