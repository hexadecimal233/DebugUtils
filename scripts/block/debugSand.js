const debugSand = extendContent(Wall, "debugSand", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSand")
		];
	},
	
});
debugSand.health = 100;
debugSand.size = 1;
debugSand.category = Category.effect;
debugSand.breakable = true;
debugSand.floating = true;
debugSand.update = true;
debugSand.buildType = () => 
  extendContent(Wall.WallBuild, debugSand, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.sand);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSand.buildVisibility = BuildVisibility.sandboxOnly;


