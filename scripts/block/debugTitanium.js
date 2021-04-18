const debugTitanium = extendContent(Wall, "debugTitanium", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugTitanium")
		];
	},
	
});
debugTitanium.health = 100;
debugTitanium.size = 1;
debugTitanium.category = Category.effect;
debugTitanium.breakable = true;
debugTitanium.floating = true;
debugTitanium.update = true;
debugTitanium.buildType = () => 
  extendContent(Wall.WallBuild, debugTitanium, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.oreTitanium);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugTitanium.buildVisibility = BuildVisibility.sandboxOnly;


