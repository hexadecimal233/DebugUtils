const debugSporeMoss = extendContent(Wall, "debugSporeMoss", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSporeMoss")
		];
	},
	
});
debugSporeMoss.health = 100;
debugSporeMoss.size = 1;
debugSporeMoss.category = Category.effect;
debugSporeMoss.breakable = true;
debugSporeMoss.floating = true;
debugSporeMoss.update = true;
debugSporeMoss.buildType = () => 
  extendContent(Wall.WallBuild, debugSporeMoss, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.sporeMoss);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSporeMoss.buildVisibility = BuildVisibility.sandboxOnly;


