const debugIceSnow = extendContent(Wall, "debugIceSnow", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugIceSnow")
		];
	},
	
});
debugIceSnow.health = 100;
debugIceSnow.size = 1;
debugIceSnow.category = Category.effect;
debugIceSnow.breakable = true;
debugIceSnow.floating = true;
debugIceSnow.update = true;
debugIceSnow.buildType = () => 
  extendContent(Wall.WallBuild, debugIceSnow, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.iceSnow);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugIceSnow.buildVisibility = BuildVisibility.sandboxOnly;


