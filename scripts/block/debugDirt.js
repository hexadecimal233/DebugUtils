const debugDirt = extendContent(Wall, "debugDirt", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugDirt")
		];
	},
	
});
debugDirt.health = 100;
debugDirt.size = 1;
debugDirt.category = Category.effect;
debugDirt.breakable = true;
debugDirt.floating = true;
debugDirt.update = true;
debugDirt.buildType = () => 
  extendContent(Wall.WallBuild, debugDirt, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugDirt.buildVisibility = BuildVisibility.sandboxOnly;


