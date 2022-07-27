import { userData }  from '../settings'

cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel:{
            default: null,
            type: cc.Node
        }, 


        scorecur:cc.Integer,

        level:cc.Integer,

        sum:cc.Integer
       
    },

    start(){
        //this.saveUserDataEvent()
        //this.showUserDate()
    },

    setStep(step){
        this.getSum(step);

    },

    hide(){
        this.node.active=false;
        this.node.emit("fade-out")
       
    },
    showUserDate(){
        for(var k in userData){
            if(!cc.sys.localStorage.getItem(k.toString())){
                return false
            }
            var dataText=JSON.parse(cc.sys.localStorage.getItem(k.toString()));
            console.log("GATE:"+k)
            console.log(dataText)
        }
       
    },
    getSum(step){
        this.sum=step+ this.sum;
        cc.log('sum:'+ this.sum)
        if( this.sum>this.scorecur){ this.sum=this.scorecur}
        this.scoreLabel.setScale( this.sum/this.scorecur,1)
        if( this.sum==this.scorecur){
            this.node.emit("gameend");//发送给 end
            this.win()               
        }
    },
    win () {
        // 更新关卡信息
        var k =this.level-1
        if(!cc.sys.localStorage.getItem((k).toString())){
            return false
        }
        var data = JSON.parse(cc.sys.localStorage.getItem((k).toString()));
        console.log(data);
        data= 1;   
        console.log(data);
        //data[1]= 1;       
        cc.sys.localStorage.setItem((this.level-1).toString(), JSON.stringify(data));

        
        console.log('恭喜过关！');
    },

   
    // update (dt) {},
});
