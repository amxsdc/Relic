import { userData }  from './settings'

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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
       

    },
    saveUserDataEvent: function () {
        var ciphertext;
        
        for(var k in userData) {
            ciphertext = userData[k];
            cc.sys.localStorage.setItem(k.toString(), JSON.stringify(ciphertext));
            console.log("saveData")
        }
    },

    // update (dt) {},
});
