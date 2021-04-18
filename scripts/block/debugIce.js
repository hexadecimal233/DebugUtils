const debugIce = extendContent(Wall, "debugIce", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugIce")
		];
	},
	
});
debugIce.health = 100;
debugIce.size = 1;
debugIce.category = Category.effect;
debugIce.breakable = true;
debugIce.floating = true;
debugIce.update = true;
debugIce.buildType = () => 
  extendContent(Wall.WallBuild, debugIce, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.ice);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugIce.buildVisibility = BuildVisibility.sandboxOnly;


