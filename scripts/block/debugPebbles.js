const debugPebbles = extendContent(Wall, "debugPebbles", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugPebbles")
		];
	},
	
});
debugPebbles.health = 100;
debugPebbles.size = 1;
debugPebbles.category = Category.effect;
debugPebbles.breakable = true;
debugPebbles.floating = true;
debugPebbles.update = true;
debugPebbles.buildType = () => 
  extendContent(Wall.WallBuild, debugPebbles, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setOverlay(Blocks.pebbles);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugPebbles.buildVisibility = BuildVisibility.sandboxOnly;


