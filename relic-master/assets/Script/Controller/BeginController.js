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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onBegin :function(){
        // this.loadingBar.node.active = true;
        this.loginButton.node.active = true;
        // this.loadingBar.progress = 0;
        let backup = cc.loader.onProgress;
        // cc.loader.onProgress = function (count, amount) {
        //     this.loadingBar.progress = count / amount;
        // }.bind(this);
        
        cc.director.preloadScene("Begin", function () {
            cc.loader.onProgress = backup;
            // this.loadingBar.node.active = false;
            this.loginButton.node.active = true;
            cc.director.loadScene("Begin");
        }.bind(this));

    },

    onDestroy: function(){
        cc.audioEngine.stop(this.gameSceneBGMAudioId);
    }


    // update (dt) {},
});
