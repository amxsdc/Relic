// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import AudioUtils from "../Utils/AudioUtils";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        loginButton: {
            type: cc.Button,
            default: null,
        },
        BGM:{
            type: cc.AudioClip,
            default: null,
        }
    },

    onLoad () {
        this.gameSceneBGMAudioId = cc.audioEngine.play(this.BGM, true, 1);
    },


    start () {

    },

    onBegin :function(){
        this.loginButton.node.active = true;
        cc.director.loadScene("Main");
    },

    onGallery :function(){
        this.loginButton.node.active = true;
        cc.director.loadScene("Gallery");
    },

    onDestroy: function(){
        cc.audioEngine.stop(this.gameSceneBGMAudioId);
    }


    // update (dt) {},
});
