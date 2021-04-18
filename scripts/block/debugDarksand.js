const debugDarksand = extendContent(Wall, "debugDarksand", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarksand")
		];
	},
	
});
debugDarksand.health = 100;
debugDarksand.size = 1;
debugDarksand.category = Category.effect;
debugDarksand.breakable = true;
debugDarksand.floating = true;
debugDarksand.update = true;
debugDarksand.buildType = () => 
  extendContent(Wall.WallBuild, debugDarksand, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.darksand);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarksand.buildVisibility = BuildVisibility.sandboxOnly;


