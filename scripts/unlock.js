
if (Vars.net.client()) {
		if (!Vars.player.admin) {
		}
	} else if (Vars.state.rules.sector) {
	} else {
		Blocks.blockForge.buildVisibility = BuildVisibility.shown;
		Blocks.blockLoader.buildVisibility = BuildVisibility.shown;
		Blocks.blockUnloader.buildVisibility = BuildVisibility.shown;
		Blocks.launchPad.buildVisibility = BuildVisibility.shown;
		Blocks.launchPadLarge.buildVisibility = BuildVisibility.shown;
		Blocks.interplanetaryAccelerator.buildVisibility = BuildVisibility.shown;
		Blocks.coreShard.buildVisibility = BuildVisibility.shown;
		Blocks.powerSource.powerProduction = Number.MAX_VALUE;
		
}