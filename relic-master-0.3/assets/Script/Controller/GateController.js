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

    gate2: function(){       
        
        cc.director.preloadScene("Game2", function () {
           
            cc.director.loadScene("Game2");
        }.bind(this));
    },
    gate3: function(){       
       
        cc.director.preloadScene("Game3", function () {
           
            cc.director.loadScene("Game3");
        }.bind(this));
    },
    gate4: function(){       
        cc.director.preloadScene("Game4", function () {
            
            cc.director.loadScene("Game4");
        }.bind(this));
    },
    gate5: function(){       
       
        cc.director.preloadScene("Game5", function () {
            
            cc.director.loadScene("Game5");
        }.bind(this));
    },
    gate6: function(){       
       
        cc.director.preloadScene("Game6", function () {
            
            cc.director.loadScene("Game6");
        }.bind(this));
    },
    gate7: function(){       
        
        cc.director.preloadScene("Game7", function () {
           
            cc.director.loadScene("Game7");
        }.bind(this));
    },
    gate8: function(){       
        
        cc.director.preloadScene("Game8", function () {
           
            cc.director.loadScene("Game8");
        }.bind(this));
    },
    gate9: function(){       
       
        cc.director.preloadScene("Game9", function () {
            
            cc.director.loadScene("Game9");
        }.bind(this));
    },
    gate10: function(){       
        
        cc.director.preloadScene("Game10", function () {
            
            cc.director.loadScene("Game10");
        }.bind(this));
    },
    gate11: function(){       
        
        cc.director.preloadScene("Game11", function () {
            
            cc.director.loadScene("Game11");
        }.bind(this));
    },
    gate12: function(){       
        
        cc.director.preloadScene("Game12", function () {
            
            cc.director.loadScene("Game12");
        }.bind(this));
    },
    gate13: function(){       
       
        cc.director.preloadScene("Game13", function () {
         
            cc.director.loadScene("Game13");
        }.bind(this));
    },
    gate14: function(){       
       
        cc.director.preloadScene("Game14", function () {
          
            cc.director.loadScene("Game14");
        }.bind(this));
    },
    gate15: function(){       
       
        cc.director.preloadScene("Game15", function () {
        
            cc.director.loadScene("Game15");
        }.bind(this));
    },
});
