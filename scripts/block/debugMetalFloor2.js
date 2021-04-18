const debugMetalFloor2 = extendContent(Wall, "debugMetalFloor2", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugMetalFloor2")
		];
	},
	
});
debugMetalFloor2.health = 100;
debugMetalFloor2.size = 1;
debugMetalFloor2.category = Category.effect;
debugMetalFloor2.breakable = true;
debugMetalFloor2.floating = true;
debugMetalFloor2.update = true;
debugMetalFloor2.buildType = () => 
  extendContent(Wall.WallBuild, debugMetalFloor2, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.metalFloor2);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugMetalFloor2.buildVisibility = BuildVisibility.sandboxOnly;


