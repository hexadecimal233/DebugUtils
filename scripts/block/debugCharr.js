const debugCharr = extendContent(Wall, "debugCharr", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugCharr")
		];
	},
	
});
debugCharr.health = 100;
debugCharr.size = 1;
debugCharr.category = Category.effect;
debugCharr.breakable = true;
debugCharr.floating = true;
debugCharr.update = true;
debugCharr.buildType = () => 
  extendContent(Wall.WallBuild, debugCharr, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.charr);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugCharr.buildVisibility = BuildVisibility.sandboxOnly;


