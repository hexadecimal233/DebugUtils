const debugSpawn = extendContent(Wall, "debugSpawn", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSpawn")
		];
	},
	
});
debugSpawn.health = 100;
debugSpawn.size = 1;
debugSpawn.category = Category.effect;
debugSpawn.breakable = true;
debugSpawn.floating = true;
debugSpawn.update = true;
debugSpawn.buildType = () => 
  extendContent(Wall.WallBuild, debugSpawn, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setOverlay(Blocks.spawn);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSpawn.buildVisibility = BuildVisibility.sandboxOnly;


