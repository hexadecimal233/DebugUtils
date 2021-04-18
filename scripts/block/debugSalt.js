const debugSalt = extendContent(Wall, "debugSalt", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSalt")
		];
	},
	
});
debugSalt.health = 100;
debugSalt.size = 1;
debugSalt.category = Category.effect;
debugSalt.breakable = true;
debugSalt.floating = true;
debugSalt.update = true;
debugSalt.buildType = () => 
  extendContent(Wall.WallBuild, debugSalt, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.salt);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSalt.buildVisibility = BuildVisibility.sandboxOnly;


