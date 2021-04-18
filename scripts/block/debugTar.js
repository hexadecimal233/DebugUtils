const debugTar = extendContent(Wall, "debugTar", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugTar")
		];
	},
	
});
debugTar.health = 100;
debugTar.size = 1;
debugTar.category = Category.effect;
debugTar.breakable = true;
debugTar.floating = true;
debugTar.update = true;
debugTar.buildType = () => 
  extendContent(Wall.WallBuild, debugTar, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.tar);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugTar.buildVisibility = BuildVisibility.sandboxOnly;


