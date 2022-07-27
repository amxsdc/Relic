// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {   
        // type: cc.Node
       

    },
    // onLoad () {},

    start () {
        
    },

    showMain(){
        this.node.active=true;
        this.node.emit("fade-in")
        
    },
    showGame(){
        this.node.active=true;
        this.node.emit("gameend")
    },
    hide(){
        this.node.active=false;
        this.node.emit("fade-out")
       
    }



    // update (dt) {},
});
