const debugSnow = extendContent(Wall, "debugSnow", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSnow")
		];
	},
	
});
debugSnow.health = 100;
debugSnow.size = 1;
debugSnow.category = Category.effect;
debugSnow.breakable = true;
debugSnow.floating = true;
debugSnow.update = true;
debugSnow.buildType = () => 
  extendContent(Wall.WallBuild, debugSnow, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.snow);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSnow.buildVisibility = BuildVisibility.sandboxOnly;


