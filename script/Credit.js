var creditState = function(game){
    
};

    creditState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
            this.stage.backgroundColor = '#F1FF87';
            this.buildInterface();
            game.global.menuBgSound.stop();
            
            this.about();
        },
        
        buildInterface: function(){
                            
	//User Inteface
		var bar = this.add.graphics();
	    bar.beginFill(0xfae013);
	    bar.drawRect(0, 0, this.game.width, 40);
	    bar.endFill();

	    bar.beginFill(0x49B8E7, 1);
	    bar.drawRect(0, 40, this.game.width, 10);
	    bar.endFill();        

	    bar = this.add.graphics();
	    bar.beginFill(0x6ac8ed, 1);
	    bar.drawRect(0, 50, this.game.width, 10);
	    bar.endFill();        

		var barBottom = this.add.graphics();
	    barBottom.beginFill(0x6ac8ed, 1);
	    barBottom.drawRect(0, this.game.height - 100, this.game.width, 95);
	    barBottom.endFill();        

	    barBottom = this.add.graphics();
	    barBottom.beginFill(0x49B8E7, 1);
	    barBottom.drawRect(0, this.game.height - 90, this.game.width, 90);
	    barBottom.endFill();    

	    barBottom = this.add.graphics();
	    barBottom.beginFill(0xD3F939, 1);
	    barBottom.drawRect(0, this.game.height - 80, this.game.width, 80);
	    barBottom.endFill();
                
    this.backBtn = game.add.button(this.world.centerX,game.height-40,'backward',function(){
this.game.state.start('Menu');
},this);
        this.backBtn.anchor.setTo(0.5,0.5);
        this.backBtn.input.useHandCursor = true;
        },
        
        about: function(){
            
            this.gamedev = this.add.sprite(this.world.centerX-150,350,'coder');
            this.gamedev.anchor.setTo(0.5);
            this.gamedev.scale.setTo(0.2);
            
            this.devcredit = this.add.sprite(this.world.centerX+120,150,'name');
            this.devcredit.anchor.setTo(0.5);
            
            this.git = this.add.sprite(this.world.centerX+300,350,'git');
            this.git.anchor.setTo(0.3);
            this.git.scale.setTo(0.4);
        }
        
    }
