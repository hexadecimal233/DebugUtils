const debugBasalt = extendContent(Wall, "debugBasalt", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugBasalt")
		];
	},
	
});
debugBasalt.health = 100;
debugBasalt.size = 1;
debugBasalt.category = Category.effect;
debugBasalt.breakable = true;
debugBasalt.floating = true;
debugBasalt.update = true;
debugBasalt.buildType = () => 
  extendContent(Wall.WallBuild, debugBasalt, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.basalt);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugBasalt.buildVisibility = BuildVisibility.sandboxOnly;


