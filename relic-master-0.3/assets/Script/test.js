let userData = [
    {1: 0},
    {2: 0},
    {3: 0},
    {4: 0},
    {5: 0},
    {6: 0},
    {7: 0},
    {8: 0},
];

cc.Class({
    extends: cc.Component,

    properties: {
      
    },


    start () {
        this.setCurrentData();
        console.log(this.getCurrentData())
        cc.log(this.getCurrentData())
        //console.log(this.getCurrentData())

    },
    setCurrentData(){
        var k=1
        cc.sys.localStorage.setItem(k.toString(),JSON.stringify('SHOW'));
    },
    getCurrentData(){
        var k=1
        return JSON.parse(cc.sys.localStorage.getItem(k.toString()));

    },


    // update (dt) {},
});
