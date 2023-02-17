
var loadState = function(game){

};

  loadState.prototype = {
      
      preload: function(){
          console.log(game.state.getCurrentState());

          var Font = "40px Rowdies";
            this.loadText = this.add.text(this.world.centerX,this.world.centerY,'loading ',{font: Font, fill: '#247719', stroke: '#ccff00', strokeThickness: 2});
          this.loadText.anchor.setTo(0.5,0.5);
          
          /*
          this.loadingBg = this.add.sprite(this.world.centerX,this.world.centerY,'loadingbg');
          this.loadingBg.anchor.setTo(0.5,0.5);
          this.loadingBg.scale.setTo(0.5,0.5);
          
          this.loadingBar = this.add.sprite(this.world.centerX,this.world.centerY,'loadingbar');
          this.loadingBar.anchor.setTo(0.5,0.5);
          this.loadingBar.scale.setTo(0.5,1);
          this.load.setPreloadSprite(this.loadingBar);
          this.loadingBar.x = this.world.centerX - this.loadingBar.width/2;
          */
          
          // load all objcet 
          this.load.image('background','assets/bg.jpg');
          this.load.image('cactus','assets/cactus.png');
          this.load.image('platform_safe','assets/platform_safe.png');
          this.game.load.image('forest-back', 'assets/title_bg_2.jpg');
          this.game.load.image('forest-mid', 'assets/title_bg_1.webp');
          this.game.load.image('lianas', 'assets/lianas.jpg');
          
          //load fruties
          this.load.image('fruit0','assets/fruits/banana_01.png');
          this.load.image('fruit1','assets/fruits/grape.png');
          this.load.image('fruit2','assets/fruits/pineapple.png');
          this.load.image('fruit3','assets/fruits/watermelon.png');
          this.load.image('fruit4','assets/fruits/cherry.png');
          // load utility
          this.load.spritesheet('gems','assets/gems-sprite.png',45,42); // fruit.js && play.js
          // load player
          //  this.load.spritesheet('jolly','assets/player/monkey.png',63,78);
          this.load.spritesheet('jolly','assets/player/cat.png',138,119,7);
            // фон
  
          
          // load GUI
           this.load.image('play','assets/GUI/play.png');    
           this.load.image('setting','assets/GUI/setting.png');    
           this.load.image('credit','assets/GUI/credit.png');    
           this.load.image('howtoplay','assets/GUI/howToPlay.png');      
           this.load.spritesheet('sound-sprite','assets/GUI/sound.png',70,60); 
           this.load.image('title-bg','assets/GUI/bg.png');
          //  this.pauseButton.scale.setTo(0.4,0.4);
           this.load.image('menu-title','assets/GUI/menu_title.png');
           this.load.image('pauseBtn','assets/GUI/pause.png');  // Play.js
           this.load.image('restartBtn','assets/GUI/restart.png');  // leaderboard.js
           this.load.image('menuBtn','assets/GUI/b_More.png');  // leaderboard.js
           this.load.image('backward','assets/GUI/backward.png');// credit.js
           this.load.image('resumeBtn','assets/GUI/resume.png'); // Play.js
           this.load.image('life','assets/GUI/life.png'); // Play.js
           this.load.image('coconut','assets/coconut.png'); // fruit.js
           
          //credit
          this.load.image('git','assets/credit/git.png');
          this.load.image('name','assets/credit/name.png');
          this.load.image('coder','assets/credit/coder.png');
          
          // how to play
          this.load.image('how-to-play','assets/how-to-play.png');
          
          // sounds
          this.load.audio('fruitGulp','sounds/fruitGulp.mp3',true);
          this.load.audio('menuBg','sounds/menuBg.mp3',true);
          this.load.audio('main','sounds/main.mp3',true);
          this.load.audio('jumpSound','sounds/jump.mp3',true);

          this.load.audio('gemSound','sounds/gemSound.mp3',true);
          
          this.load.audio('deadSound','sounds/dead.mp3',true);
          
          this.load.audio('cocoSound','sounds/dap.mp3',true);
          
      },
      
      create: function(){
            
        this.sound.setDecodedCallback([ 'gemSound', 'menuBg', 'jumpSound','deadSound' ], function(){
              console.log('sounds are ready');
              this.state.start('Menu');
        }, this);
    },
      
      loadUpdate: function(){
        this.loadText.text = 'loading '+this.load.progress+'%';
          console.log(this.load.progress);
      },
      
      update: function(){
            
      }
      
      
  }