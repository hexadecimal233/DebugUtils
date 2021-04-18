const debugLead = extendContent(Wall, "debugLead", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugLead")
		];
	},
	
});
debugLead.health = 100;
debugLead.size = 1;
debugLead.category = Category.effect;
debugLead.breakable = true;
debugLead.floating = true;
debugLead.update = true;
debugLead.buildType = () => 
  extendContent(Wall.WallBuild, debugLead, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.oreLead);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugLead.buildVisibility = BuildVisibility.sandboxOnly;


