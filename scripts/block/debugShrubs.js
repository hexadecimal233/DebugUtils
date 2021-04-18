const debugShrubs = extendContent(Wall, "debugShrubs", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugShrubs")
		];
	},
	
});
debugShrubs.health = 100;
debugShrubs.size = 1;
debugShrubs.category = Category.effect;
debugShrubs.breakable = true;
debugShrubs.floating = true;
debugShrubs.update = true;
debugShrubs.buildType = () => 
  extendContent(Wall.WallBuild, debugShrubs, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.shrubs);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugShrubs.buildVisibility = BuildVisibility.sandboxOnly;


