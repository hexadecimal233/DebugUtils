const debugMud = extendContent(Wall, "debugMud", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugMud")
		];
	},
	
});
debugMud.health = 100;
debugMud.size = 1;
debugMud.category = Category.effect;
debugMud.breakable = true;
debugMud.floating = true;
debugMud.update = true;
debugMud.buildType = () => 
  extendContent(Wall.WallBuild, debugMud, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.mud);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugMud.buildVisibility = BuildVisibility.sandboxOnly;


