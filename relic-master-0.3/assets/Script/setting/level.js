import { userData }  from './settings'


cc.Class({
    extends: cc.Component,

    properties: {
        gate:cc.Integer

    },

    start(){     
        //this.saveUserDataEvent()  
        this.readdata()
        
    },


    saveUserDataEvent: function () {
        var ciphertext;
        
        for(var k in userData) {
            ciphertext = "0";
            cc.sys.localStorage.setItem(k.toString(), JSON.stringify(ciphertext));
            //wx.setStorageSync(k, JSON.stringify(ciphertext))
        }
    },
    readdata(){
       var k=this.gate-1
       if(!cc.sys.localStorage.getItem(k.toString())){
            return false
        }
       var dataText=JSON.parse(cc.sys.localStorage.getItem(k.toString()));
        console.log("GATE:"+this.gate)
        console.log(dataText)
       this.changePic(dataText)  
    },
    changePic(dataText){
        if(dataText==1){
            this.node.children[0].active=true
            this.node.children[1].active=false
        }
        else{
            this.node.children[0].active=false
            this.node.children[1].active=true 
        }
    }
});
