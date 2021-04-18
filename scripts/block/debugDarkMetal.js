const debugDarkMetal = extendContent(Wall, "debugDarkMetal", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDarkMetal")
		];
	},
	
});
debugDarkMetal.health = 100;
debugDarkMetal.size = 1;
debugDarkMetal.category = Category.effect;
debugDarkMetal.breakable = true;
debugDarkMetal.floating = true;
debugDarkMetal.update = true;
debugDarkMetal.buildType = () => 
  extendContent(Wall.WallBuild, debugDarkMetal, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.darkMetal);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDarkMetal.buildVisibility = BuildVisibility.sandboxOnly;


