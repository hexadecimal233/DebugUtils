const debugBoulder = extendContent(Wall, "debugBoulder", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugBoulder")
		];
	},
	
});
debugBoulder.health = 100;
debugBoulder.size = 1;
debugBoulder.category = Category.effect;
debugBoulder.breakable = true;
debugBoulder.floating = true;
debugBoulder.update = true;
debugBoulder.buildType = () => 
  extendContent(Wall.WallBuild, debugBoulder, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.boulder);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugBoulder.buildVisibility = BuildVisibility.sandboxOnly;


