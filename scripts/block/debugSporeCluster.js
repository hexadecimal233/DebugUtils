const debugSporeCluster = extendContent(Wall, "debugSporeCluster", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugSporeCluster")
		];
	},
	
});
debugSporeCluster.health = 100;
debugSporeCluster.size = 1;
debugSporeCluster.category = Category.effect;
debugSporeCluster.breakable = true;
debugSporeCluster.floating = true;
debugSporeCluster.update = true;
debugSporeCluster.buildType = () => 
  extendContent(Wall.WallBuild, debugSporeCluster, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.sporeCluster);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugSporeCluster.buildVisibility = BuildVisibility.sandboxOnly;


