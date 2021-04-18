const debugTendrils = extendContent(Wall, "debugTendrils", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("debugTendrils")
		];
	},
	
});
debugTendrils.health = 100;
debugTendrils.size = 1;
debugTendrils.category = Category.effect;
debugTendrils.breakable = true;
debugTendrils.floating = true;
debugTendrils.update = true;
debugTendrils.buildType = () => 
  extendContent(Wall.WallBuild, debugTendrils, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.tendrils);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  });

debugTendrils.buildVisibility = BuildVisibility.sandboxOnly;


