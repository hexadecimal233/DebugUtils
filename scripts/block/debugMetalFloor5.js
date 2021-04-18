const debugMetalFloor5 = extendContent(Wall, "debugMetalFloor5", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugMetalFloor5")
		];
	},
	
});
debugMetalFloor5.health = 100;
debugMetalFloor5.size = 1;
debugMetalFloor5.category = Category.effect;
debugMetalFloor5.breakable = true;
debugMetalFloor5.floating = true;
debugMetalFloor5.update = true;
debugMetalFloor5.buildType = () => 
  extendContent(Wall.WallBuild, debugMetalFloor5, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.metalFloor5);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugMetalFloor5.buildVisibility = BuildVisibility.sandboxOnly;


