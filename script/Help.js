var helpState = {
    // how to play state
        
        create: function(){
            // console.log(game.state.getCurrentState());
            game.global.menuBgSound.stop();
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
                //Set the games background colour
                this.game.stage.backgroundColor = '#697e96';
                this.lianasBack = game.add.sprite(0,0,'lianas',1);
                if (window.innerWidth<=950){
                    this.lianasBack.scale.setTo(2);
                }
                else { this.lianasBack.scale.setTo(1.2);}
               
            this.howtoplay = this.add.sprite(this.world.centerX,this.world.centerY,'how-to-play');
            this.howtoplay.anchor.setTo(0.5);
            
            if (window.innerWidth<=950){
                this.backBtn = game.add.button(this.world.centerX,game.height-100,'backward',function(){
                    this.game.state.start('Menu');
                    },this);
            }
            else { this.backBtn = game.add.button(this.world.centerX,game.height-60,'backward',function(){
                this.game.state.start('Menu');
                },this);}           
   
        this.backBtn.anchor.setTo(0.4,0.4);
        this.backBtn.input.useHandCursor = true;
            
        },
        
        update: function(){
            
        }
        
    }