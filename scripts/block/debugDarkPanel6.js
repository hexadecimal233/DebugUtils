const debugDarkPanel6 = extendContent(Wall, "debugDarkPanel6", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarkPanel6")
		];
	},
	
});
debugDarkPanel6.health = 100;
debugDarkPanel6.size = 1;
debugDarkPanel6.category = Category.effect;
debugDarkPanel6.breakable = true;
debugDarkPanel6.floating = true;
debugDarkPanel6.update = true;
debugDarkPanel6.buildType = () => 
  extendContent(Wall.WallBuild, debugDarkPanel6, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.darkPanel6);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarkPanel6.buildVisibility = BuildVisibility.sandboxOnly;


