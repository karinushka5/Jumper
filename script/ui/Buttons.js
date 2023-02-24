var menuButtons = function (game) {
    this.game = game;
    this.playbtn;
    this.creditbtn;
    this.muteButton;
    this.soundPlay = true;
};

menuButtons.prototype = {

    create: function () {


        if (window.innerWidth <= 950) {
            this.playbtn = game.add.button(game.world.centerX, game.world.centerY + 30, 'play', this.handlePlay, this);
        }
        else {
            this.playbtn = game.add.button(game.world.centerX, game.world.centerY, 'play', this.handlePlay, this);
        }
        this.playbtn.anchor.setTo(0.5, 0.5);
        this.playbtn.input.useHandCursor = true;


        if (window.innerWidth <= 950) {
            this.helpbtn = game.add.button(game.world.centerX - 150, game.height - 95, 'howtoplay', this.handleHelp, this);
        } else {
            this.helpbtn = game.add.button(game.world.centerX - 150, game.height - 60, 'howtoplay', this.handleHelp, this);
        }
        this.helpbtn.anchor.setTo(0.5, 0.5);
        this.helpbtn.input.useHandCursor = true;


        if (window.innerWidth <= 950) {
            this.creditbtn = game.add.button(game.world.centerX, game.height - 95, 'credit', this.handleCredit, this);
        } else {
            this.creditbtn = game.add.button(game.world.centerX, game.height - 60, 'credit', this.handleCredit, this);
        }
        this.creditbtn.anchor.setTo(0.5, 0.5);
        this.creditbtn.input.useHandCursor = true;


        if (window.innerWidth <= 950) {
            this.muteButton = game.add.button(game.world.centerX + 150, game.height - 90, 'sound-sprite', this.muteSound, this);
        } else {
            this.muteButton = game.add.button(game.world.centerX + 150, game.height - 55, 'sound-sprite', this.muteSound, this);
        }
        if (game.global.soundPlay) {
            this.muteButton.frame = 1;
        }
        else {
            this.muteButton.frame = 0;
        }

        this.muteButton.anchor.setTo(0.5, 0.5);
        this.muteButton.input.useHandCursor = true;

    },

    handlePlay: function () {
        // run the play (core) state
        game.global.menuBgSound.stop();
        game.state.start('Play');
    },

    handleHelp: function () {
        this.game.state.start('Help');
    },

    handleCredit: function () {
        this.game.state.start('Credit');
    },

    muteSound: function () {
        game.global.mute = !game.global.mute;

        if (game.global.mute == true) {
            this.muteButton.frame = 0;
            game.global.soundPlay = false;
            game.global.menuBgSound.stop();
        }
        else {
            game.global.soundPlay = true;
            this.muteButton.frame = 1;
            game.global.menuBgSound.play();
        }

    },

    update: function () {


    }


}


