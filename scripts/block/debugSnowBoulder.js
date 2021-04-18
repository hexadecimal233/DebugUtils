const debugSnowBoulder = extendContent(Wall, "debugSnowBoulder", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSnowBoulder")
		];
	},
	
});
debugSnowBoulder.health = 100;
debugSnowBoulder.size = 1;
debugSnowBoulder.category = Category.effect;
debugSnowBoulder.breakable = true;
debugSnowBoulder.floating = true;
debugSnowBoulder.update = true;
debugSnowBoulder.buildType = () => 
  extendContent(Wall.WallBuild, debugSnowBoulder, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.snowBoulder);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSnowBoulder.buildVisibility = BuildVisibility.sandboxOnly;


