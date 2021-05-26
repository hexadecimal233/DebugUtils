const baseColor = Color.valueOf("84f491");
const phaseColor = Color.valueOf("ffd59e");
const MendFieldAbility = (range, reload, healP) => {
    var timer = 0;
    var ability = new JavaAdapter(Ability, {
        localized() {
            return Core.bundle.get("ability.btm-MendFieldAbility");
        },
        update(unit) {
            Vars.indexer.eachBlock(unit, range, boolf(other => other.damaged()), cons(other => {
                timer += Time.delta;
                if(timer >= reload){
                    timer = 0;
                    other.heal((healP/100) * other.block.health);
                    Fx.healBlockFull.at(other.x, other.y, other.block.size, Tmp.c1.set(baseColor).lerp(phaseColor, 0.3));
                }
            }));
        },
        copy() {
            return MendFieldAbility(range, reload, healP);
        },
        draw(unit) {
            Vars.indexer.eachBlock(unit, range, boolf(other => other.damaged()), cons(other => {
                var tmp = Tmp.c1.set(baseColor);
                tmp.a = Mathf.absin(4, 1);
                Drawf.selected(other, tmp);
                }));
        },
    });
    return ability;
};
exports.MendFieldAbility = MendFieldAbility;

const pointDefenseAbility = (px, py, reloadTime, range, bulletDamage, sprite) => {
    const color = Color.white;
    var target = null;
    var reload = 0;
    var rotation = 90;
    var timer = 90;
    var ability = new JavaAdapter(Ability, {
        localized() {
            return "defense";
        },
        update(unit) {
            var x = unit.x + Angles.trnsx(unit.rotation, py, px);
            var y = unit.y + Angles.trnsy(unit.rotation, py, px);
            target = Groups.bullet.intersect(unit.x - range, unit.y - range, range*2, range*2).min(b => b.team != unit.team && b.type.hittable, b => b.dst2(unit));

            if(target != null && !target.isAdded()){
                target = null;
            }
            if(target == null){
                if(timer >= 90){
                    rotation = Angles.moveToward(rotation, unit.rotation, 3);
                }else{
                    timer += Time.delta;
                }
            }
            if(target != null && target.within(unit, range) && target.team != unit.team && target.type != null && target.type.hittable){
                timer = 0;
                reload += Time.delta;
                //var dest = unit.angleTo(target);
                var dest = target.angleTo(x, y) - 180;
                rotation = Angles.moveToward(rotation, dest, 20);
                if(Angles.within(rotation, dest, 3) && reload >= reloadTime){
                    if(target.damage > bulletDamage){
                        target.damage = target.damage - bulletDamage;
                    }else{
                        target.remove();
                    }
                    Tmp.v1.trns(rotation, 6);
                    Fx.pointBeam.at(x + Tmp.v1.x, y + Tmp.v1.y, rotation, color, new Vec2().set(target));
                    Fx.sparkShoot.at(x + Tmp.v1.x, y + Tmp.v1.y, rotation, color);
                    Fx.pointHit.at(target.x, target.y, color);
                    Sounds.lasershoot.at(x, y, Mathf.random(0.9, 1.1));
                    reload = 0;
                }
            }
        },
        copy() {
            return pointDefenseAbility(px, py, reloadTime, range, bulletDamage, sprite);
        },
        draw(unit){
            var x = unit.x + Angles.trnsx(unit.rotation, py, px);
            var y = unit.y + Angles.trnsy(unit.rotation, py, px);
            var region = Core.atlas.find("debugutils-" + sprite);
            Draw.rect(region, x, y, rotation - 90);
        },
    });
    return ability;
};
exports.pointDefenseAbility = pointDefenseAbility;