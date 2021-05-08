const sandboxSwitch = extendContent(Wall, "sandboxSwitch", {
	canPlaceOn(){
		return true;
	},icons(){
		return [
			Core.atlas.find("sandboxSwitch")
		];
	},
	
});
sandboxSwitch.health = 100;
sandboxSwitch.size = 1;
sandboxSwitch.category = Category.effect;
sandboxSwitch.breakable = true;
sandboxSwitch.floating = true;
sandboxSwitch.update = true;
sandboxSwitch.alwaysUnlocked = true;
sandboxSwitch.buildType = () => 
  extendContent(Wall.WallBuild, sandboxSwitch, {
    placed() {
		if(Vars.net.client()){
		let code = "Vars.state.rules.infiniteResources = !Vars.state.rules.infiniteResources";
		Call.sendChatMessage("/js " + code);
		}
		Vars.state.rules.infiniteResources = !Vars.state.rules.infiniteResources;
    },
  });
sandboxSwitch.buildVisibility = BuildVisibility.shown;
