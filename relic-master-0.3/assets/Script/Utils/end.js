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

  

    onLoad () {
        this.duration=0.5
        this.outofWorld=cc.v2(1200,0)
        this.node.position=this.outofWorld


        this.node.on("gameend",this.startAction,this);
        
        this.node.on('fade-out',this.startFadeOut,this)

        let cbFadeIn=cc.callFunc(this.onFadeInFinish(),this)
        let cbFadeOut=cc.callFunc(this.onFadeOutFinish(),this)   

        this.actionFadein=cc.sequence(
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

    startAction(){
        cc.log("Get_end")
        this.node.position=cc.v2(0,0)
        this.node.setScale(2)
        this.node.opacity=0;
        this.node.runAction(this.actionFadein)
    },

    
    startFadeOut(){
        cc.log("hide")
        this.node.runAction(this.actionFadeOut)
        // cc.director.preloadScene("Game", function () {
            
        //     this.loginButton.node.active = true;
        //     cc.director.loadScene("Game");
        // }.bind(this));
    },


    onFadeInFinish(){
        cc.log("onFadeInFinish")
    },
    onFadeOutFinish(){
        cc.log("onFadeOutFinish")
    },

    // update (dt) {},
});
