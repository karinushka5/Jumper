var background = function(game){
    
};
let widthRatio = window.innerWidth* window.devicePixelRatio/1000;
let heightRatio = window.innerHeight* window.devicePixelRatio/800;
let height = window.innerHeight * window.devicePixelRatio;
    background.prototype = {
        
        create: function(){
            this.bg = game.add.sprite(0,0,'background');
            // перемещаем начальную точку в верхний левый угол
            this.bg.anchor.setTo(0,0);
            
            if(window.innerWidth* window.devicePixelRatio<=950) {
                console.log((window.innerWidth * window.devicePixelRatio/3500)/widthRatio)
                  this.bg.scale.setTo((window.innerWidth * window.devicePixelRatio/3500)/widthRatio);
                console.log( 'scale',(window.innerWidth * window.devicePixelRatio/3500)/heightRatio);
            }
            else {this.bg.scale.setTo((window.innerWidth * window.devicePixelRatio/3500));}
          
            this.bg.fixedToCamera = true;
            
            // cactus
            this.cactus = game.add.sprite(game.world.centerX,height-20,'cactus');
            this.cactus.fixedToCamera = true;
            this.cactus.anchor.setTo(0.5,0.5);
            game.physics.arcade.enable(this.cactus);
            this.cactus.body.setSize(1000,30,5,20);
            this.cactus.body.immovable = true;
        },
        
        render: function(){
            game.debug.body(this.cactus);
        }
    }

