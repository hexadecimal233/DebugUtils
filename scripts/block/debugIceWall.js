const debugIceWall = extendContent(Wall, "debugIceWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugIceWall")
		];
	},
	
});
debugIceWall.health = 100;
debugIceWall.size = 1;
debugIceWall.category = Category.effect;
debugIceWall.breakable = true;
debugIceWall.floating = true;
debugIceWall.update = true;
debugIceWall.buildType = () => 
  extendContent(Wall.WallBuild, debugIceWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.iceWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugIceWall.buildVisibility = BuildVisibility.sandboxOnly;


