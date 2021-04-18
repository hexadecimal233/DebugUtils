const debugBasaltBoulder = extendContent(Wall, "debugBasaltBoulder", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugBasaltBoulder")
		];
	},
	
});
debugBasaltBoulder.health = 100;
debugBasaltBoulder.size = 1;
debugBasaltBoulder.category = Category.effect;
debugBasaltBoulder.breakable = true;
debugBasaltBoulder.floating = true;
debugBasaltBoulder.update = true;
debugBasaltBoulder.buildType = () => 
  extendContent(Wall.WallBuild, debugBasaltBoulder, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.basaltBoulder);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugBasaltBoulder.buildVisibility = BuildVisibility.sandboxOnly;


