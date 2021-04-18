const debugAir2 = extendContent(Wall, "debugAir2", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugAir2")
		];
	},
	
});
debugAir2.health = 100;
debugAir2.size = 1;
debugAir2.category = Category.effect;
debugAir2.breakable = true;
debugAir2.floating = true;
debugAir2.update = true;

debugAir2.buildType = () => 
  extendContent(Wall.WallBuild, debugAir2, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.air);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugAir2.buildVisibility = BuildVisibility.sandboxOnly;


