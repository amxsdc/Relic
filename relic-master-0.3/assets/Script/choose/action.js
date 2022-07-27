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
        cc.tween(this.node)
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})
            .to(1, {opacity: 0})
            .to(1, {opacity: 255})

            .start();

    },
    
});
