const debugSporeWall = extendContent(Wall, "debugSporeWall", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSporeWall")
		];
	},
	
});
debugSporeWall.health = 100;
debugSporeWall.size = 1;
debugSporeWall.category = Category.effect;
debugSporeWall.breakable = true;
debugSporeWall.floating = true;
debugSporeWall.update = true;
debugSporeWall.buildType = () => 
  extendContent(Wall.WallBuild, debugSporeWall, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.sporeWall);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSporeWall.buildVisibility = BuildVisibility.sandboxOnly;


