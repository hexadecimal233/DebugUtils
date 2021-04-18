const debugMagmarock = extendContent(Wall, "debugMagmarock", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugMagmarock")
		];
	},
	
});
debugMagmarock.health = 100;
debugMagmarock.size = 1;
debugMagmarock.category = Category.effect;
debugMagmarock.breakable = true;
debugMagmarock.floating = true;
debugMagmarock.update = true;
debugMagmarock.buildType = () => 
  extendContent(Wall.WallBuild, debugMagmarock, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.magmarock);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugMagmarock.buildVisibility = BuildVisibility.sandboxOnly;


