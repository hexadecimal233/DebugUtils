const debugDarkPanel3 = extendContent(Wall, "debugDarkPanel3", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarkPanel3")
		];
	},
	
});
debugDarkPanel3.health = 100;
debugDarkPanel3.size = 1;
debugDarkPanel3.category = Category.effect;
debugDarkPanel3.breakable = true;
debugDarkPanel3.floating = true;
debugDarkPanel3.update = true;
debugDarkPanel3.buildType = () => 
  extendContent(Wall.WallBuild, debugDarkPanel3, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.darkPanel3);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarkPanel3.buildVisibility = BuildVisibility.sandboxOnly;


