const debugDarkPanel5 = extendContent(Wall, "debugDarkPanel5", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarkPanel5")
		];
	},
	
});
debugDarkPanel5.health = 100;
debugDarkPanel5.size = 1;
debugDarkPanel5.category = Category.effect;
debugDarkPanel5.breakable = true;
debugDarkPanel5.floating = true;
debugDarkPanel5.update = true;
debugDarkPanel5.buildType = () => 
  extendContent(Wall.WallBuild, debugDarkPanel5, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.darkPanel5);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarkPanel5.buildVisibility = BuildVisibility.sandboxOnly;


