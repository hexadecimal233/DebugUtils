const debugWater = extendContent(Wall, "debugWater", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugWater")
		];
	},
	
});
debugWater.health = 100;
debugWater.size = 1;
debugWater.category = Category.effect;
debugWater.breakable = true;
debugWater.floating = true;
debugWater.update = true;
debugWater.buildType = () => 
  extendContent(Wall.WallBuild, debugWater, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.water);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugWater.buildVisibility = BuildVisibility.sandboxOnly;


