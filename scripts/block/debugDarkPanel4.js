const debugDarkPanel4 = extendContent(Wall, "debugDarkPanel4", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarkPanel4")
		];
	},
	
});
debugDarkPanel4.health = 100;
debugDarkPanel4.size = 1;
debugDarkPanel4.category = Category.effect;
debugDarkPanel4.breakable = true;
debugDarkPanel4.floating = true;
debugDarkPanel4.update = true;
debugDarkPanel4.buildType = () => 
  extendContent(Wall.WallBuild, debugDarkPanel4, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.darkPanel4);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarkPanel4.buildVisibility = BuildVisibility.sandboxOnly;


