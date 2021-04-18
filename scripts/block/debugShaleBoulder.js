const debugShaleBoulder = extendContent(Wall, "debugShaleBoulder", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugShaleBoulder")
		];
	},
	
});
debugShaleBoulder.health = 100;
debugShaleBoulder.size = 1;
debugShaleBoulder.category = Category.effect;
debugShaleBoulder.breakable = true;
debugShaleBoulder.floating = true;
debugShaleBoulder.update = true;
debugShaleBoulder.buildType = () => 
  extendContent(Wall.WallBuild, debugShaleBoulder, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.shaleBoulder);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugShaleBoulder.buildVisibility = BuildVisibility.sandboxOnly;


