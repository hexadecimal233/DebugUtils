const debugMoss = extendContent(Wall, "debugMoss", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugMoss")
		];
	},
	
});
debugMoss.health = 100;
debugMoss.size = 1;
debugMoss.category = Category.effect;
debugMoss.breakable = true;
debugMoss.floating = true;
debugMoss.update = true;
debugMoss.buildType = () => 
  extendContent(Wall.WallBuild, debugMoss, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.moss);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugMoss.buildVisibility = BuildVisibility.sandboxOnly;


