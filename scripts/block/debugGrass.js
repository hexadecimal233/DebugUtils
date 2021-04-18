const debugGrass = extendContent(Wall, "debugGrass", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugGrass")
		];
	},
	
});
debugGrass.health = 100;
debugGrass.size = 1;
debugGrass.category = Category.effect;
debugGrass.breakable = true;
debugGrass.floating = true;
debugGrass.update = true;
debugGrass.buildType = () => 
  extendContent(Wall.WallBuild, debugGrass, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.grass);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugGrass.buildVisibility = BuildVisibility.sandboxOnly;


