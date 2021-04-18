const debugSandBoulder = extendContent(Wall, "debugSandBoulder", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSandBoulder")
		];
	},
	
});
debugSandBoulder.health = 100;
debugSandBoulder.size = 1;
debugSandBoulder.category = Category.effect;
debugSandBoulder.breakable = true;
debugSandBoulder.floating = true;
debugSandBoulder.update = true;
debugSandBoulder.buildType = () => 
  extendContent(Wall.WallBuild, debugSandBoulder, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.sandBoulder);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSandBoulder.buildVisibility = BuildVisibility.sandboxOnly;


