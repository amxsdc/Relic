// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
      
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.duration=0.4
        this.outofWorld=cc.v2(2000,0)
        this.node.position=this.outofWorld

        this.node.on('fade-in',this.startFadeIn,this)
        this.node.on('fade-out',this.startFadeOut,this)
        this.node.on('gameend',this.startIntro,this)

        let cbFadeIn=cc.callFunc(this.onFadeInFinish(),this)
        let cbFadeOut=cc.callFunc(this.onFadeOutFinish(),this)   
                 
        this.actionFadein=cc.sequence(
           cc.spawn(
               cc.fadeTo(this.duration,255),cc.scaleTo(this.duration,1)
          ),cbFadeIn
        )
        this.actionIntro=cc.sequence(
            cc.spawn(
                cc.fadeTo(this.duration,255),cc.scaleTo(this.duration,1)
           ),cbFadeIn
         )
        this.actionFadeOut=cc.sequence(
            cc.spawn(
                cc.fadeTo(this.duration,0),cc.scaleTo(this.duration,2)
            ),cbFadeOut
        )
    },



    startIntro(){
        console.log("show")
        this.node.position=cc.v2(300,580)
        this.node.setScale(2)
        this.node.opacity=0;
        this.node.runAction(this.actionIntro)
    },

    startFadeIn(){
        console.log("show")
        this.node.position=cc.v2(-20,0)
        this.node.setScale(2)
        this.node.opacity=0;
        this.node.runAction(this.actionFadein)
    },
    startFadeOut(){
         console.log("hide")
         this.node.runAction(this.actionFadeOut)
    },

    onFadeInFinish(){
        cc.log("onFadeInFinish")
    },
    onFadeOutFinish(){
        cc.log("onFadeOutFinish")
    },

    start () {

    },

    // update (dt) {},
});
