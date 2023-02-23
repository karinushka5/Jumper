var bootState = {
   // console.log("current state : "+'bootState');
    
    

// let screenOrient = screen.orientation.type;
   
        
        init: function(){
            
            console.log(game.state.getCurrentState());
               
            if (this.game.device.desktop){
            
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.setGameSize(this.game.width,this.game.height);
                this.scale.setMinMax(320,380); // (minwidth,minheight,maxwidth,maxheight)
                this.scale.updateLayout(true);
                this.scale.refresh();
                 
                }
            
            else{
                
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                // this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
                this.scale.setGameSize(window.innerWidth,window.innerHeight);
                
                this.scale.setMinMax(320,300);       
                this.scale.forceOrientation(true,false);//(landscape,portrait)
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
                this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
                this.scale.updateLayout(true);
                this.scale.refresh();
                
              
                }
            
        },
       
        enterIncorrectOrientation: function(){
            if (screenOrient ='portrait-primary') {
            const rotate = document.getElementById('orientation');
            rotate.style.display = 'flex';
            rotate.style.top = window.innerHeight/2+'px';
            document.getElementById('gameContainer').style.display = 'none';
            this.game.paused = true;
            this.game.update();
            }
            
        },
        
        leaveIncorrectOrientation: function(){
            document.getElementById('gameContainer').style.display = 'block';
            document.getElementById('orientation').style.display = 'none';
            this.game.paused = false;
            this.game.update();
            
            },
            
        
        preload: function(){
        },
        
        create: function(){
            this.state.start('Preload');
           
        }
        
    }
    window.addEventListener('orientationchange', () => {
        const orientation = window.matchMedia('(orientation: landscape)')
        window.location.reload()
        if (orientation.matches) {
            window.scrollTo(0,1);
            document.documentElement.requestFullScreen();
        }
    })
