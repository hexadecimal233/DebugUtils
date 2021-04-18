const debugDarkPanel1 = extendContent(Wall, "debugDarkPanel1", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarkPanel1")
		];
	},
	
});
debugDarkPanel1.health = 100;
debugDarkPanel1.size = 1;
debugDarkPanel1.category = Category.effect;
debugDarkPanel1.breakable = true;
debugDarkPanel1.floating = true;
debugDarkPanel1.update = true;
debugDarkPanel1.buildType = () => 
  extendContent(Wall.WallBuild, debugDarkPanel1, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.darkPanel1);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarkPanel1.buildVisibility = BuildVisibility.sandboxOnly;


