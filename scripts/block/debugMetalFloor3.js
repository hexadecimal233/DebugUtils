const debugMetalFloor3 = extendContent(Wall, "debugMetalFloor3", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugMetalFloor3")
		];
	},
	
});
debugMetalFloor3.health = 100;
debugMetalFloor3.size = 1;
debugMetalFloor3.category = Category.effect;
debugMetalFloor3.breakable = true;
debugMetalFloor3.floating = true;
debugMetalFloor3.update = true;
debugMetalFloor3.buildType = () => 
  extendContent(Wall.WallBuild, debugMetalFloor3, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.metalFloor3);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugMetalFloor3.buildVisibility = BuildVisibility.sandboxOnly;


