const debugCopper = extendContent(Wall, "debugCopper", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugCopper")
		];
	},
	
});
debugCopper.health = 100;
debugCopper.size = 1;
debugCopper.category = Category.effect;
debugCopper.breakable = true;
debugCopper.floating = true;
debugCopper.update = true;
debugCopper.buildType = () => 
  extendContent(Wall.WallBuild, debugCopper, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setFloor(Blocks.oreCopper);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugCopper.buildVisibility = BuildVisibility.sandboxOnly;


