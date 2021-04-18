const debugSlag = extendContent(Wall, "debugSlag", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSlag")
		];
	},
	
});
debugSlag.health = 100;
debugSlag.size = 1;
debugSlag.category = Category.effect;
debugSlag.breakable = true;
debugSlag.floating = true;
debugSlag.update = true;
debugSlag.buildType = () => 
  extendContent(Wall.WallBuild, debugSlag, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.slag);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSlag.buildVisibility = BuildVisibility.sandboxOnly;


