var player = function(game){
    this.game = game;
    this.player;
    this.cursor;
    this.jumpButton;
    this.flag;
};

    player.prototype = {
        
        create: function(){ 
            
            if (window.innerWidth<=950) {
                this.player = game.add.sprite(game.world.centerX+300,game.world.centerY,'jolly',1);
            } else {
                this.player = game.add.sprite(game.world.centerX+300,game.world.centerY,'jolly',1);
            }
            this.player.anchor.setTo(0.5,0.5);
            game.physics.arcade.enable(this.player);
            this.player.body.setSize(50,55,0,0);
            this.player.body.collideWorldBounds = true;
            this.player.body.gravity.set(0,game.rnd.integerInRange(500,800));
            //this.handleBounce(2);
            
            this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.cursor = game.input.keyboard.createCursorKeys();
            
            this.yOrig = this.player.y;
            this.yChange = 0;
            this.cameraYMin = 99999;
        },
        
        handleBounce: function(i){
              this.player.body.bounce.set(1,i);    
        },
        
        update: function(){
            
            game.world.setBounds(0,-this.yChange,game.world.width,game.height+this.yChange);
            this.cameraYMin = Math.min(this.cameraYMin,this.player.y-game.height+300);
            //game.camera.y -= 1;
            game.camera.y = this.cameraYMin;
        },
        
        handleMovement: function(){
            
            
            function touchMoveRight() {
                player.prototype.handleMovement(this.cursor.right.isDown);
            };
            this.standing = this.player.body.touching.down || this.player.body.blocked.down;
           
            if(this.jumpButton.isDown && this.standing==true){
                this.player.frame = 0;
                this.player.body.velocity.y = -500;
                if (window.innerWidth<=950){
                    this.player.body.velocity.y = -650;
                }
            }
            else if(this.cursor.left.isDown){
                this.player.frame = 5;
                this.player.body.velocity.x = -150;
                
            }
            else if(this.cursor.right.isDown){
                this.player.frame = 2;   
                this.player.body.velocity.x = 150;
                function touchMoveRight(event) {
                    console.log(event);
                    this.player.frame = 2;   
                    this.player.body.velocity.x = 150;
                }
            }
            else{
                this.player.frame = 0;
                this.player.body.velocity.x = 0;
            }
            
            // track the maximum amount that hero has traveled
            var t1 = Math.abs(this.player.y);     
            this.yChange = Math.max(Math.abs(t1+this.yOrig)+2000);
        },
        
        render: function(){
            game.debug.bodyInfo(this.player,32,32);
           // game.debug.body(this.player);
            //game.debug.text(this.standing,62,135); //return false when air
        }
    } 
   