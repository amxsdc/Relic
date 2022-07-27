// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
     
        loginButton: {
            type: cc.Button,
            default: null,
        },

        gate:cc.String
    },
    gate1: function(){       
        this.loginButton.node.active = true;
        cc.director.preloadScene("Game"+this.gate, function () {
            this.loginButton.node.active = true;
            cc.log("gate:"+this.gate);
            cc.director.loadScene("Game"+this.gate);
        }.bind(this));
    },
  

    start () {

    },

    
});
