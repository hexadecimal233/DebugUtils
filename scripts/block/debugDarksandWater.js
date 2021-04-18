const debugDarksandWater = extendContent(Wall, "debugDarksandWater", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarksandWater")
		];
	},
	
});
debugDarksandWater.health = 100;
debugDarksandWater.size = 1;
debugDarksandWater.category = Category.effect;
debugDarksandWater.breakable = true;
debugDarksandWater.floating = true;
debugDarksandWater.update = true;
debugDarksandWater.buildType = () => 
  extendContent(Wall.WallBuild, debugDarksandWater, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.darksandWater);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarksandWater.buildVisibility = BuildVisibility.sandboxOnly;


