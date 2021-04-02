

if (Vars.net.client()) {
		if (!Vars.player.admin) {
			return;
		}
	} else if (Vars.state.rules.sector) {
		return;
	} else {
		Blocks.launchPad.buildVisibility = BuildVisibility.shown;
		Blocks.launchPadLarge.buildVisibility = BuildVisibility.shown;
		Blocks.interplanetaryAccelerator.buildVisibility = BuildVisibility.shown;
}
	
