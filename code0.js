gdjs.stageCode = {};
gdjs.stageCode.GDp1HitboxObjects1_1final = [];

gdjs.stageCode.GDp2HitboxObjects1_1final = [];

gdjs.stageCode.GDPlayer1Objects1= [];
gdjs.stageCode.GDPlayer1Objects2= [];
gdjs.stageCode.GDPlayer2Objects1= [];
gdjs.stageCode.GDPlayer2Objects2= [];
gdjs.stageCode.GDWallLeftObjects1= [];
gdjs.stageCode.GDWallLeftObjects2= [];
gdjs.stageCode.GDWallTiledObjects1= [];
gdjs.stageCode.GDWallTiledObjects2= [];
gdjs.stageCode.GDBackgroundObjects1= [];
gdjs.stageCode.GDBackgroundObjects2= [];
gdjs.stageCode.GDtriggerKillObjects1= [];
gdjs.stageCode.GDtriggerKillObjects2= [];
gdjs.stageCode.GDPlatformObjects1= [];
gdjs.stageCode.GDPlatformObjects2= [];
gdjs.stageCode.GDBasicFlameObjects1= [];
gdjs.stageCode.GDBasicFlameObjects2= [];
gdjs.stageCode.GDBasicSparksObjects1= [];
gdjs.stageCode.GDBasicSparksObjects2= [];
gdjs.stageCode.GDBasicSmokeObjects1= [];
gdjs.stageCode.GDBasicSmokeObjects2= [];
gdjs.stageCode.GDMagicObjects1= [];
gdjs.stageCode.GDMagicObjects2= [];
gdjs.stageCode.GDMagic2Objects1= [];
gdjs.stageCode.GDMagic2Objects2= [];
gdjs.stageCode.GDStarSparksObjects1= [];
gdjs.stageCode.GDStarSparksObjects2= [];
gdjs.stageCode.GDBasicExplosionEnergySparksObjects1= [];
gdjs.stageCode.GDBasicExplosionEnergySparksObjects2= [];
gdjs.stageCode.GDBasicExplosionSmoothObjects1= [];
gdjs.stageCode.GDBasicExplosionSmoothObjects2= [];
gdjs.stageCode.GDBasicExplosionEnergyObjects1= [];
gdjs.stageCode.GDBasicExplosionEnergyObjects2= [];
gdjs.stageCode.GDLightningTextureObjects1= [];
gdjs.stageCode.GDLightningTextureObjects2= [];
gdjs.stageCode.GDp1HitboxObjects1= [];
gdjs.stageCode.GDp1HitboxObjects2= [];
gdjs.stageCode.GDp2HitboxObjects1= [];
gdjs.stageCode.GDp2HitboxObjects2= [];
gdjs.stageCode.GDp2knockbackObjects1= [];
gdjs.stageCode.GDp2knockbackObjects2= [];
gdjs.stageCode.GDp1knockbackObjects1= [];
gdjs.stageCode.GDp1knockbackObjects2= [];

gdjs.stageCode.conditionTrue_0 = {val:false};
gdjs.stageCode.condition0IsTrue_0 = {val:false};
gdjs.stageCode.condition1IsTrue_0 = {val:false};
gdjs.stageCode.condition2IsTrue_0 = {val:false};
gdjs.stageCode.condition3IsTrue_0 = {val:false};
gdjs.stageCode.condition4IsTrue_0 = {val:false};
gdjs.stageCode.conditionTrue_1 = {val:false};
gdjs.stageCode.condition0IsTrue_1 = {val:false};
gdjs.stageCode.condition1IsTrue_1 = {val:false};
gdjs.stageCode.condition2IsTrue_1 = {val:false};
gdjs.stageCode.condition3IsTrue_1 = {val:false};
gdjs.stageCode.condition4IsTrue_1 = {val:false};


gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.stageCode.GDPlayer1Objects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDtriggerKillObjects1Objects = Hashtable.newFrom({"triggerKill": gdjs.stageCode.GDtriggerKillObjects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.stageCode.GDPlayer2Objects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDtriggerKillObjects1Objects = Hashtable.newFrom({"triggerKill": gdjs.stageCode.GDtriggerKillObjects1});gdjs.stageCode.eventsList0 = function(runtimeScene) {

{


gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
{gdjs.stageCode.conditionTrue_1 = gdjs.stageCode.condition1IsTrue_0;
gdjs.stageCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8248564);
}
}}
if (gdjs.stageCode.condition1IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDp1HitboxObjects1 */
{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.stageCode.GDPlayer2Objects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.stageCode.GDPlayer1Objects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.stageCode.GDPlayer2Objects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.stageCode.GDPlayer1Objects1});gdjs.stageCode.eventsList1 = function(runtimeScene) {

{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.stageCode.condition0IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDp2knockbackObjects1 */
{runtimeScene.getVariables().getFromIndex(3).setNumber(15);
}{for(var i = 0, len = gdjs.stageCode.GDp2knockbackObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2knockbackObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)) + "%");
}
}}

}


};gdjs.stageCode.eventsList2 = function(runtimeScene) {

{


gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad0");
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
{gdjs.stageCode.conditionTrue_1 = gdjs.stageCode.condition1IsTrue_0;
gdjs.stageCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8253044);
}
}}
if (gdjs.stageCode.condition1IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDp2HitboxObjects1 */
{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}}

}


};gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.stageCode.GDPlayer1Objects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.stageCode.GDPlayer2Objects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.stageCode.GDPlayer1Objects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.stageCode.GDPlayer2Objects1});gdjs.stageCode.eventsList3 = function(runtimeScene) {

{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if (gdjs.stageCode.condition0IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDp1knockbackObjects1 */
{runtimeScene.getVariables().getFromIndex(2).setNumber(15);
}{for(var i = 0, len = gdjs.stageCode.GDp1knockbackObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1knockbackObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2)) + "%");
}
}}

}


};gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDp1HitboxObjects1Objects = Hashtable.newFrom({"p1Hitbox": gdjs.stageCode.GDp1HitboxObjects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDp2HitboxObjects1Objects = Hashtable.newFrom({"p2Hitbox": gdjs.stageCode.GDp2HitboxObjects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDp2HitboxObjects1Objects = Hashtable.newFrom({"p2Hitbox": gdjs.stageCode.GDp2HitboxObjects1});gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDp1HitboxObjects1Objects = Hashtable.newFrom({"p1Hitbox": gdjs.stageCode.GDp1HitboxObjects1});gdjs.stageCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("triggerKill"), gdjs.stageCode.GDtriggerKillObjects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects, gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDtriggerKillObjects1Objects, false, runtimeScene, false);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("p1knockback"), gdjs.stageCode.GDp1knockbackObjects1);
{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].setPosition(50,0);
}
}{runtimeScene.getVariables().get("jumpCount").setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.stageCode.GDp1knockbackObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1knockbackObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2)) + "%");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("triggerKill"), gdjs.stageCode.GDtriggerKillObjects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects, gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDtriggerKillObjects1Objects, false, runtimeScene, false);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("p2knockback"), gdjs.stageCode.GDp2knockbackObjects1);
{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].setPosition(300,0);
}
}{runtimeScene.getVariables().get("jumpCount").setNumber(1);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.stageCode.GDp2knockbackObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2knockbackObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)) + "%");
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad4");
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad6");
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad0");
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
gdjs.stageCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
}}
if (gdjs.stageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad4"));
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
gdjs.stageCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad6"));
}}
if (gdjs.stageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].setPosition((( gdjs.stageCode.GDp1HitboxObjects1.length === 0 ) ? 0 :gdjs.stageCode.GDp1HitboxObjects1[0].getX()) - 2,(( gdjs.stageCode.GDp1HitboxObjects1.length === 0 ) ? 0 :gdjs.stageCode.GDp1HitboxObjects1[0].getY()));
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].setPosition((( gdjs.stageCode.GDp2HitboxObjects1.length === 0 ) ? 0 :gdjs.stageCode.GDp2HitboxObjects1[0].getX()) - 2,(( gdjs.stageCode.GDp2HitboxObjects1.length === 0 ) ? 0 :gdjs.stageCode.GDp2HitboxObjects1[0].getY()));
}
}}

}


{



}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.stageCode.GDp1HitboxObjects1.length = 0;


gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
{
{gdjs.stageCode.conditionTrue_1 = gdjs.stageCode.condition0IsTrue_0;
gdjs.stageCode.GDp1HitboxObjects1_1final.length = 0;gdjs.stageCode.condition0IsTrue_1.val = false;
gdjs.stageCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects2);
for(var i = 0, k = 0, l = gdjs.stageCode.GDp1HitboxObjects2.length;i<l;++i) {
    if ( gdjs.stageCode.GDp1HitboxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.stageCode.condition0IsTrue_1.val = true;
        gdjs.stageCode.GDp1HitboxObjects2[k] = gdjs.stageCode.GDp1HitboxObjects2[i];
        ++k;
    }
}
gdjs.stageCode.GDp1HitboxObjects2.length = k;if( gdjs.stageCode.condition0IsTrue_1.val ) {
    gdjs.stageCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stageCode.GDp1HitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.stageCode.GDp1HitboxObjects1_1final.indexOf(gdjs.stageCode.GDp1HitboxObjects2[j]) === -1 )
            gdjs.stageCode.GDp1HitboxObjects1_1final.push(gdjs.stageCode.GDp1HitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects2);
for(var i = 0, k = 0, l = gdjs.stageCode.GDp1HitboxObjects2.length;i<l;++i) {
    if ( gdjs.stageCode.GDp1HitboxObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.stageCode.condition1IsTrue_1.val = true;
        gdjs.stageCode.GDp1HitboxObjects2[k] = gdjs.stageCode.GDp1HitboxObjects2[i];
        ++k;
    }
}
gdjs.stageCode.GDp1HitboxObjects2.length = k;if( gdjs.stageCode.condition1IsTrue_1.val ) {
    gdjs.stageCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stageCode.GDp1HitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.stageCode.GDp1HitboxObjects1_1final.indexOf(gdjs.stageCode.GDp1HitboxObjects2[j]) === -1 )
            gdjs.stageCode.GDp1HitboxObjects1_1final.push(gdjs.stageCode.GDp1HitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.stageCode.GDp1HitboxObjects1_1final, gdjs.stageCode.GDp1HitboxObjects1);
}
}
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
gdjs.stageCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 2;
}}
if (gdjs.stageCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.stageCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.stageCode.GDp1HitboxObjects1.length = 0;


gdjs.stageCode.condition0IsTrue_0.val = false;
{
{gdjs.stageCode.conditionTrue_1 = gdjs.stageCode.condition0IsTrue_0;
gdjs.stageCode.GDp1HitboxObjects1_1final.length = 0;gdjs.stageCode.condition0IsTrue_1.val = false;
gdjs.stageCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects2);
for(var i = 0, k = 0, l = gdjs.stageCode.GDp1HitboxObjects2.length;i<l;++i) {
    if ( gdjs.stageCode.GDp1HitboxObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stageCode.condition0IsTrue_1.val = true;
        gdjs.stageCode.GDp1HitboxObjects2[k] = gdjs.stageCode.GDp1HitboxObjects2[i];
        ++k;
    }
}
gdjs.stageCode.GDp1HitboxObjects2.length = k;if( gdjs.stageCode.condition0IsTrue_1.val ) {
    gdjs.stageCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stageCode.GDp1HitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.stageCode.GDp1HitboxObjects1_1final.indexOf(gdjs.stageCode.GDp1HitboxObjects2[j]) === -1 )
            gdjs.stageCode.GDp1HitboxObjects1_1final.push(gdjs.stageCode.GDp1HitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects2);
for(var i = 0, k = 0, l = gdjs.stageCode.GDp1HitboxObjects2.length;i<l;++i) {
    if ( gdjs.stageCode.GDp1HitboxObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.stageCode.condition1IsTrue_1.val = true;
        gdjs.stageCode.GDp1HitboxObjects2[k] = gdjs.stageCode.GDp1HitboxObjects2[i];
        ++k;
    }
}
gdjs.stageCode.GDp1HitboxObjects2.length = k;if( gdjs.stageCode.condition1IsTrue_1.val ) {
    gdjs.stageCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stageCode.GDp1HitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.stageCode.GDp1HitboxObjects1_1final.indexOf(gdjs.stageCode.GDp1HitboxObjects2[j]) === -1 )
            gdjs.stageCode.GDp1HitboxObjects1_1final.push(gdjs.stageCode.GDp1HitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.stageCode.GDp1HitboxObjects1_1final, gdjs.stageCode.GDp1HitboxObjects1);
}
}
}if (gdjs.stageCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
gdjs.stageCode.condition2IsTrue_0.val = false;
gdjs.stageCode.condition3IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
gdjs.stageCode.condition1IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects, gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects, 30, false);
}if ( gdjs.stageCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer1Objects1[i].timerElapsedTime("attacktimerp1", 0.3) ) {
        gdjs.stageCode.condition2IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer1Objects1[k] = gdjs.stageCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer1Objects1.length = k;}if ( gdjs.stageCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer1Objects1[i].getX() > (( gdjs.stageCode.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer2Objects1[0].getPointX("")) ) {
        gdjs.stageCode.condition3IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer1Objects1[k] = gdjs.stageCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer1Objects1.length = k;}}
}
}
if (gdjs.stageCode.condition3IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDPlayer1Objects1 */
/* Reuse gdjs.stageCode.GDPlayer2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].addPolarForce((( gdjs.stageCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer1Objects1[0].getAngleToObject((gdjs.stageCode.GDPlayer2Objects1.length !== 0 ? gdjs.stageCode.GDPlayer2Objects1[0] : null))) + 45, (20 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)))) + 20, 1);
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].resetTimer("attacktimerp1");
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].resetTimer("p2KnockbackTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
gdjs.stageCode.condition2IsTrue_0.val = false;
gdjs.stageCode.condition3IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
gdjs.stageCode.condition1IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects, gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects, 30, false);
}if ( gdjs.stageCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer1Objects1[i].timerElapsedTime("attacktimerp1", 0.3) ) {
        gdjs.stageCode.condition2IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer1Objects1[k] = gdjs.stageCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer1Objects1.length = k;}if ( gdjs.stageCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer1Objects1[i].getX() < (( gdjs.stageCode.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer2Objects1[0].getPointX("")) ) {
        gdjs.stageCode.condition3IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer1Objects1[k] = gdjs.stageCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer1Objects1.length = k;}}
}
}
if (gdjs.stageCode.condition3IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDPlayer1Objects1 */
/* Reuse gdjs.stageCode.GDPlayer2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].addPolarForce((( gdjs.stageCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer1Objects1[0].getAngleToObject((gdjs.stageCode.GDPlayer2Objects1.length !== 0 ? gdjs.stageCode.GDPlayer2Objects1[0] : null))) - 45, (20 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)))) + 20, 1);
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].resetTimer("attacktimerp1");
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].resetTimer("p2KnockbackTimer");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer2Objects1[i].timerElapsedTime("p2KnockbackTimer", 0.2) ) {
        gdjs.stageCode.condition0IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer2Objects1[k] = gdjs.stageCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer2Objects1.length = k;}if (gdjs.stageCode.condition0IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDPlayer2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].removeTimer("p2KnockbackTimer");
}
}{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer1Objects1[i].getTimerElapsedTimeInSecondsOrNaN("attacktimerp1") < 0.01 ) {
        gdjs.stageCode.condition0IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer1Objects1[k] = gdjs.stageCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer1Objects1.length = k;}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
{gdjs.stageCode.conditionTrue_1 = gdjs.stageCode.condition1IsTrue_0;
gdjs.stageCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7908252);
}
}}
if (gdjs.stageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p2knockback"), gdjs.stageCode.GDp2knockbackObjects1);
{runtimeScene.getVariables().getFromIndex(3).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) * 1.2));
}{for(var i = 0, len = gdjs.stageCode.GDp2knockbackObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2knockbackObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)) + "%");
}
}
{ //Subevents
gdjs.stageCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("p2knockback"), gdjs.stageCode.GDp2knockbackObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].resetTimer("attacktimerp1");
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].resetTimer("p2KnockbackTimer");
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.stageCode.GDp2knockbackObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2knockbackObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)) + "%");
}
}}

}


{



}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.stageCode.GDp2HitboxObjects1.length = 0;


gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
{
{gdjs.stageCode.conditionTrue_1 = gdjs.stageCode.condition0IsTrue_0;
gdjs.stageCode.GDp2HitboxObjects1_1final.length = 0;gdjs.stageCode.condition0IsTrue_1.val = false;
gdjs.stageCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects2);
for(var i = 0, k = 0, l = gdjs.stageCode.GDp2HitboxObjects2.length;i<l;++i) {
    if ( gdjs.stageCode.GDp2HitboxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.stageCode.condition0IsTrue_1.val = true;
        gdjs.stageCode.GDp2HitboxObjects2[k] = gdjs.stageCode.GDp2HitboxObjects2[i];
        ++k;
    }
}
gdjs.stageCode.GDp2HitboxObjects2.length = k;if( gdjs.stageCode.condition0IsTrue_1.val ) {
    gdjs.stageCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stageCode.GDp2HitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.stageCode.GDp2HitboxObjects1_1final.indexOf(gdjs.stageCode.GDp2HitboxObjects2[j]) === -1 )
            gdjs.stageCode.GDp2HitboxObjects1_1final.push(gdjs.stageCode.GDp2HitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects2);
for(var i = 0, k = 0, l = gdjs.stageCode.GDp2HitboxObjects2.length;i<l;++i) {
    if ( gdjs.stageCode.GDp2HitboxObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.stageCode.condition1IsTrue_1.val = true;
        gdjs.stageCode.GDp2HitboxObjects2[k] = gdjs.stageCode.GDp2HitboxObjects2[i];
        ++k;
    }
}
gdjs.stageCode.GDp2HitboxObjects2.length = k;if( gdjs.stageCode.condition1IsTrue_1.val ) {
    gdjs.stageCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stageCode.GDp2HitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.stageCode.GDp2HitboxObjects1_1final.indexOf(gdjs.stageCode.GDp2HitboxObjects2[j]) === -1 )
            gdjs.stageCode.GDp2HitboxObjects1_1final.push(gdjs.stageCode.GDp2HitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.stageCode.GDp2HitboxObjects1_1final, gdjs.stageCode.GDp2HitboxObjects1);
}
}
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
gdjs.stageCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) < 2;
}}
if (gdjs.stageCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.stageCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.stageCode.GDp2HitboxObjects1.length = 0;


gdjs.stageCode.condition0IsTrue_0.val = false;
{
{gdjs.stageCode.conditionTrue_1 = gdjs.stageCode.condition0IsTrue_0;
gdjs.stageCode.GDp2HitboxObjects1_1final.length = 0;gdjs.stageCode.condition0IsTrue_1.val = false;
gdjs.stageCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects2);
for(var i = 0, k = 0, l = gdjs.stageCode.GDp2HitboxObjects2.length;i<l;++i) {
    if ( gdjs.stageCode.GDp2HitboxObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stageCode.condition0IsTrue_1.val = true;
        gdjs.stageCode.GDp2HitboxObjects2[k] = gdjs.stageCode.GDp2HitboxObjects2[i];
        ++k;
    }
}
gdjs.stageCode.GDp2HitboxObjects2.length = k;if( gdjs.stageCode.condition0IsTrue_1.val ) {
    gdjs.stageCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stageCode.GDp2HitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.stageCode.GDp2HitboxObjects1_1final.indexOf(gdjs.stageCode.GDp2HitboxObjects2[j]) === -1 )
            gdjs.stageCode.GDp2HitboxObjects1_1final.push(gdjs.stageCode.GDp2HitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects2);
for(var i = 0, k = 0, l = gdjs.stageCode.GDp2HitboxObjects2.length;i<l;++i) {
    if ( gdjs.stageCode.GDp2HitboxObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.stageCode.condition1IsTrue_1.val = true;
        gdjs.stageCode.GDp2HitboxObjects2[k] = gdjs.stageCode.GDp2HitboxObjects2[i];
        ++k;
    }
}
gdjs.stageCode.GDp2HitboxObjects2.length = k;if( gdjs.stageCode.condition1IsTrue_1.val ) {
    gdjs.stageCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stageCode.GDp2HitboxObjects2.length;j<jLen;++j) {
        if ( gdjs.stageCode.GDp2HitboxObjects1_1final.indexOf(gdjs.stageCode.GDp2HitboxObjects2[j]) === -1 )
            gdjs.stageCode.GDp2HitboxObjects1_1final.push(gdjs.stageCode.GDp2HitboxObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.stageCode.GDp2HitboxObjects1_1final, gdjs.stageCode.GDp2HitboxObjects1);
}
}
}if (gdjs.stageCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
gdjs.stageCode.condition2IsTrue_0.val = false;
gdjs.stageCode.condition3IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "NumpadAdd");
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
gdjs.stageCode.condition1IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects, gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects, 30, false);
}if ( gdjs.stageCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer1Objects1[i].timerElapsedTime("attacktimerp2", 0.3) ) {
        gdjs.stageCode.condition2IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer1Objects1[k] = gdjs.stageCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer1Objects1.length = k;}if ( gdjs.stageCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer2Objects1[i].getX() > (( gdjs.stageCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer1Objects1[0].getPointX("")) ) {
        gdjs.stageCode.condition3IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer2Objects1[k] = gdjs.stageCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer2Objects1.length = k;}}
}
}
if (gdjs.stageCode.condition3IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDPlayer1Objects1 */
/* Reuse gdjs.stageCode.GDPlayer2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].addPolarForce((( gdjs.stageCode.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer2Objects1[0].getAngleToObject((gdjs.stageCode.GDPlayer1Objects1.length !== 0 ? gdjs.stageCode.GDPlayer1Objects1[0] : null))) + 45, (20 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)))) + 20, 1);
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].resetTimer("attacktimerp2");
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].resetTimer("p1KnockbackTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
gdjs.stageCode.condition2IsTrue_0.val = false;
gdjs.stageCode.condition3IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "NumpadAdd");
}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
gdjs.stageCode.condition1IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer1Objects1Objects, gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDPlayer2Objects1Objects, 30, false);
}if ( gdjs.stageCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer2Objects1[i].timerElapsedTime("attacktimerp2", 0.3) ) {
        gdjs.stageCode.condition2IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer2Objects1[k] = gdjs.stageCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer2Objects1.length = k;}if ( gdjs.stageCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer2Objects1[i].getX() < (( gdjs.stageCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer1Objects1[0].getPointX("")) ) {
        gdjs.stageCode.condition3IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer2Objects1[k] = gdjs.stageCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer2Objects1.length = k;}}
}
}
if (gdjs.stageCode.condition3IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDPlayer1Objects1 */
/* Reuse gdjs.stageCode.GDPlayer2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].addPolarForce((( gdjs.stageCode.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer2Objects1[0].getAngleToObject((gdjs.stageCode.GDPlayer1Objects1.length !== 0 ? gdjs.stageCode.GDPlayer1Objects1[0] : null))) - 45, (20 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)))) + 20, 1);
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].resetTimer("attacktimerp2");
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].resetTimer("p1KnockbackTimer");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer1Objects1[i].timerElapsedTime("p1KnockbackTimer", 0.2) ) {
        gdjs.stageCode.condition0IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer1Objects1[k] = gdjs.stageCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer1Objects1.length = k;}if (gdjs.stageCode.condition0IsTrue_0.val) {
/* Reuse gdjs.stageCode.GDPlayer1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].removeTimer("p1KnockbackTimer");
}
}{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
gdjs.stageCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stageCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.stageCode.GDPlayer2Objects1[i].getTimerElapsedTimeInSecondsOrNaN("attacktimerp2") < 0.01 ) {
        gdjs.stageCode.condition0IsTrue_0.val = true;
        gdjs.stageCode.GDPlayer2Objects1[k] = gdjs.stageCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.stageCode.GDPlayer2Objects1.length = k;}if ( gdjs.stageCode.condition0IsTrue_0.val ) {
{
{gdjs.stageCode.conditionTrue_1 = gdjs.stageCode.condition1IsTrue_0;
gdjs.stageCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8261020);
}
}}
if (gdjs.stageCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p1knockback"), gdjs.stageCode.GDp1knockbackObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) * 1.2));
}{for(var i = 0, len = gdjs.stageCode.GDp1knockbackObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1knockbackObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2)) + "%");
}
}
{ //Subevents
gdjs.stageCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("p1knockback"), gdjs.stageCode.GDp1knockbackObjects1);
{for(var i = 0, len = gdjs.stageCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer2Objects1[i].resetTimer("attacktimerp2");
}
}{for(var i = 0, len = gdjs.stageCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.stageCode.GDPlayer1Objects1[i].resetTimer("p1KnockbackTimer");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.stageCode.GDp1knockbackObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1knockbackObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)) + "%");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDp1HitboxObjects1Objects, gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDp2HitboxObjects1Objects, false, runtimeScene, false);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
/* Reuse gdjs.stageCode.GDp1HitboxObjects1 */
{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].addPolarForce((( gdjs.stageCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer1Objects1[0].getAngleToObject((gdjs.stageCode.GDPlayer2Objects1.length !== 0 ? gdjs.stageCode.GDPlayer2Objects1[0] : null))) - 180, 45, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);

gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDp2HitboxObjects1Objects, gdjs.stageCode.mapOfGDgdjs_46stageCode_46GDp1HitboxObjects1Objects, false, runtimeScene, false);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.stageCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.stageCode.GDPlayer2Objects1);
/* Reuse gdjs.stageCode.GDp2HitboxObjects1 */
{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].addPolarForce((( gdjs.stageCode.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.stageCode.GDPlayer2Objects1[0].getAngleToObject((gdjs.stageCode.GDPlayer1Objects1.length !== 0 ? gdjs.stageCode.GDPlayer1Objects1[0] : null))) - 180, 45, 0);
}
}}

}


{


gdjs.stageCode.condition0IsTrue_0.val = false;
{
gdjs.stageCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stageCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p1Hitbox"), gdjs.stageCode.GDp1HitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("p2Hitbox"), gdjs.stageCode.GDp2HitboxObjects1);
{for(var i = 0, len = gdjs.stageCode.GDp1HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp1HitboxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.stageCode.GDp2HitboxObjects1.length ;i < len;++i) {
    gdjs.stageCode.GDp2HitboxObjects1[i].hide();
}
}}

}


};

gdjs.stageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stageCode.GDPlayer1Objects1.length = 0;
gdjs.stageCode.GDPlayer1Objects2.length = 0;
gdjs.stageCode.GDPlayer2Objects1.length = 0;
gdjs.stageCode.GDPlayer2Objects2.length = 0;
gdjs.stageCode.GDWallLeftObjects1.length = 0;
gdjs.stageCode.GDWallLeftObjects2.length = 0;
gdjs.stageCode.GDWallTiledObjects1.length = 0;
gdjs.stageCode.GDWallTiledObjects2.length = 0;
gdjs.stageCode.GDBackgroundObjects1.length = 0;
gdjs.stageCode.GDBackgroundObjects2.length = 0;
gdjs.stageCode.GDtriggerKillObjects1.length = 0;
gdjs.stageCode.GDtriggerKillObjects2.length = 0;
gdjs.stageCode.GDPlatformObjects1.length = 0;
gdjs.stageCode.GDPlatformObjects2.length = 0;
gdjs.stageCode.GDBasicFlameObjects1.length = 0;
gdjs.stageCode.GDBasicFlameObjects2.length = 0;
gdjs.stageCode.GDBasicSparksObjects1.length = 0;
gdjs.stageCode.GDBasicSparksObjects2.length = 0;
gdjs.stageCode.GDBasicSmokeObjects1.length = 0;
gdjs.stageCode.GDBasicSmokeObjects2.length = 0;
gdjs.stageCode.GDMagicObjects1.length = 0;
gdjs.stageCode.GDMagicObjects2.length = 0;
gdjs.stageCode.GDMagic2Objects1.length = 0;
gdjs.stageCode.GDMagic2Objects2.length = 0;
gdjs.stageCode.GDStarSparksObjects1.length = 0;
gdjs.stageCode.GDStarSparksObjects2.length = 0;
gdjs.stageCode.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.stageCode.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.stageCode.GDBasicExplosionSmoothObjects1.length = 0;
gdjs.stageCode.GDBasicExplosionSmoothObjects2.length = 0;
gdjs.stageCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.stageCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.stageCode.GDLightningTextureObjects1.length = 0;
gdjs.stageCode.GDLightningTextureObjects2.length = 0;
gdjs.stageCode.GDp1HitboxObjects1.length = 0;
gdjs.stageCode.GDp1HitboxObjects2.length = 0;
gdjs.stageCode.GDp2HitboxObjects1.length = 0;
gdjs.stageCode.GDp2HitboxObjects2.length = 0;
gdjs.stageCode.GDp2knockbackObjects1.length = 0;
gdjs.stageCode.GDp2knockbackObjects2.length = 0;
gdjs.stageCode.GDp1knockbackObjects1.length = 0;
gdjs.stageCode.GDp1knockbackObjects2.length = 0;

gdjs.stageCode.eventsList4(runtimeScene);
return;

}

gdjs['stageCode'] = gdjs.stageCode;
