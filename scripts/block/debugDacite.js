const debugDacite = extendContent(Wall, "debugDacite", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDacite")
		];
	},
	
});
debugDacite.health = 100;
debugDacite.size = 1;
debugDacite.category = Category.effect;
debugDacite.breakable = true;
debugDacite.floating = true;
debugDacite.update = true;
debugDacite.buildType = () => 
  extendContent(Wall.WallBuild, debugDacite, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dacite);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDacite.buildVisibility = BuildVisibility.sandboxOnly;


