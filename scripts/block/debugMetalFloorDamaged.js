const debugMetalFloorDamaged = extendContent(Wall, "debugMetalFloorDamaged", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugMetalFloorDamaged")
		];
	},
	
});
debugMetalFloorDamaged.health = 100;
debugMetalFloorDamaged.size = 1;
debugMetalFloorDamaged.category = Category.effect;
debugMetalFloorDamaged.breakable = true;
debugMetalFloorDamaged.floating = true;
debugMetalFloorDamaged.update = true;
debugMetalFloorDamaged.buildType = () => 
  extendContent(Wall.WallBuild, debugMetalFloorDamaged, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.metalFloorDamaged);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugMetalFloorDamaged.buildVisibility = BuildVisibility.sandboxOnly;


