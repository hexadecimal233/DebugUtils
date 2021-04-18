const debugMetalFloor = extendContent(Wall, "debugMetalFloor", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugMetalFloor")
		];
	},
	
});
debugMetalFloor.health = 100;
debugMetalFloor.size = 1;
debugMetalFloor.category = Category.effect;
debugMetalFloor.breakable = true;
debugMetalFloor.floating = true;
debugMetalFloor.update = true;
debugMetalFloor.buildType = () => 
  extendContent(Wall.WallBuild, debugMetalFloor, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.metalFloor);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugMetalFloor.buildVisibility = BuildVisibility.sandboxOnly;


