const debugDaciteBoulder = extendContent(Wall, "debugDaciteBoulder", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDaciteBoulder")
		];
	},
	
});
debugDaciteBoulder.health = 100;
debugDaciteBoulder.size = 1;
debugDaciteBoulder.category = Category.effect;
debugDaciteBoulder.breakable = true;
debugDaciteBoulder.floating = true;
debugDaciteBoulder.update = true;
debugDaciteBoulder.buildType = () => 
  extendContent(Wall.WallBuild, debugDaciteBoulder, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.daciteBoulder);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDaciteBoulder.buildVisibility = BuildVisibility.sandboxOnly;


