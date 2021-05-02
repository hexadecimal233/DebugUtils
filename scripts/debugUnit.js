const InvincibleForceFieldAbility = (radius, regen, max, cooldown) => {

    var realRad;
    var paramUnit;
    var paramField;
    var shieldConsumer = cons(trait => {
        if (trait.team != paramUnit.team
            && trait.type.absorbable
            && Intersector.isInsideHexagon(paramUnit.x, paramUnit.y, realRad * 2, trait.x, trait.y)
            && paramUnit.shield > 0) {

            trait.absorb();
            Fx.absorb.at(trait);

            paramField.alpha = 1;
        }
    });

    const ability = new JavaAdapter(ForceFieldAbility, {
        update(unit) {
            unit.shield = Infinity;
            this.radiusScale = Mathf.lerpDelta(this.radiusScale, 1, 0.06)
            realRad = this.radiusScale * this.radius;
            paramUnit = unit;
            paramField = this;
            Groups.bullet.intersect(unit.x - realRad, unit.y - realRad, realRad * 2, realRad * 2, shieldConsumer);
            this.alpha = Math.max(this.alpha - Time.delta / 10, 0);
        },
        copy() {
            return InvincibleForceFieldAbility(radius, regen, max, cooldown);
        },
        draw(unit) {
            this.super$draw(unit);
        },
    }, radius, regen, max, cooldown);

    return ability;
};

const a11 = extendContent(UnitType, 'debug-core-unit', {});
a11.abilities.add(new ForceFieldAbility(250, 1500, 50000, 30), new RepairFieldAbility(1500, 30, 250));
a11.abilities.add(new ShieldRegenFieldAbility(1500, 5000, 60, 250));
a11.abilities.add(new StatusFieldAbility(StatusEffects.overclock, 360, 30, 250));
a11.abilities.add(InvincibleForceFieldAbility(60, Infinity, Infinity, 300));
a11.constructor = prov(() => extend(UnitTypes.mega.constructor.get().class, {}));
a11.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.freezing,StatusEffects.unmoving, StatusEffects.slow, StatusEffects.wet, StatusEffects.muddy, StatusEffects.melting, StatusEffects.sapped, StatusEffects.tarred, StatusEffects.shocked, StatusEffects.blasted, StatusEffects.corroded, StatusEffects.sporeSlowed, StatusEffects.disarmed);
a11.payloadCapacity = (15 * 15) * Vars.tilePayload;
a11.defaultController = () => new FlyingAI();
