const debugDarkPanel2 = extendContent(Wall, "debugDarkPanel2", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarkPanel2")
		];
	},
	
});
debugDarkPanel2.health = 100;
debugDarkPanel2.size = 1;
debugDarkPanel2.category = Category.effect;
debugDarkPanel2.breakable = true;
debugDarkPanel2.floating = true;
debugDarkPanel2.update = true;
debugDarkPanel2.buildType = () => 
  extendContent(Wall.WallBuild, debugDarkPanel2, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.darkPanel2);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarkPanel2.buildVisibility = BuildVisibility.sandboxOnly;


