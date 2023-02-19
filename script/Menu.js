var menuState = function(game){
    this.game = game;
    this.buttons = null;
    this.titleBg = null;
    this.menuTitle = null;
    this.musicButton = null;
};

    menuState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
            
                //Enable Arcade Physics
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
                //Set the games background colour
                this.game.stage.backgroundColor = '#697e96';
                
                if(window.innerWidth<=950) {
                    this.forestBack = this.game.add.tileSprite(0,
                        this.game.height - this.game.cache.getImage('forest-back').height-320,
                        this.game.width,
                        this.game.cache.getImage('forest-back').height,
                        'forest-back'
                    );
                    this.forestBack.scale.setTo(1.4);
                    this.forestMid = this.game.add.tileSprite(0,
                        this.game.height - this.game.cache.getImage('forest-mid').height-60,
                        this.game.width,
                        this.game.cache.getImage('forest-mid').height,
                        'forest-mid'
                    );
                     this.forestMid.scale.setTo(1.2);
              } else {
                this.forestBack = this.game.add.tileSprite(0,
                    this.game.height - this.game.cache.getImage('forest-back').height,
                    this.game.width,
                    this.game.cache.getImage('forest-back').height,
                    'forest-back'
                );
               
                this.forestMid = this.game.add.tileSprite(0,
                    this.game.height - this.game.cache.getImage('forest-mid').height+50,
                    this.game.width,
                    this.game.cache.getImage('forest-mid').height,
                    'forest-mid'
                );
              }
            
            game.global.menuBgSound = this.game.add.audio('menuBg',1,true);
            
            this.buttons = new menuButtons(game);
            this.buttons.create();

            this.menuTitle = game.add.sprite(game.world.centerX,game.world.height-450,'menu-title');
            this.menuTitle.anchor.setTo(0.5,0.5);
            
            if(game.global.soundPlay){
                game.global.menuBgSound.play();
            }
            
            this.tweenButton(this.buttons.playbtn); // make button juicy
        },
        
        tweenButton: function(button){
            var rnd = this.game.rnd.integerInRange(7,10);
            game.add.tween(button).to({
               y:button.y+rnd,y:button.y-rnd 
            },1000,Phaser.Easing.Linear.None,true,0,-1,true);
        },
        
        update: function(){
            this.forestBack.tilePosition.x -= 0.05;
            this.forestMid.tilePosition.x -= 0.3;
        }
           
    }