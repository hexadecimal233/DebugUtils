const a11 = extendContent(UnitType, 'debug-core-unit', {});
a11.abilities.add(new ForceFieldAbility(250, 1500, 50000, 30), new RepairFieldAbility(1500, 30, 250));
a11.abilities.add(new ShieldRegenFieldAbility(1500, 5000, 60, 250));
a11.constructor = prov(() => extend(UnitTypes.mega.constructor.get().class, {}));
a11.immunities = ObjectSet.with(StatusEffects.slow, StatusEffects.unmoving);
UnitTypes.oct.defaultController = () => new FlyingAI();