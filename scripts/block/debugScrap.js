const debugScrap = extendContent(Wall, "debugScrap", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugScrap")
		];
	},
	
});
debugScrap.health = 100;
debugScrap.size = 1;
debugScrap.category = Category.effect;
debugScrap.breakable = true;
debugScrap.floating = true;
debugScrap.update = true;
debugScrap.buildType = () => 
  extendContent(Wall.WallBuild, debugScrap, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setOverlay(Blocks.oreScrap);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugScrap.buildVisibility = BuildVisibility.sandboxOnly;


