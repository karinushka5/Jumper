var leaderboardState = {
   
    
    create: function(){
        this.game = game,
        this.retriveData = 'Player',
        this.restartBtn;
        this.menuBtn;
        
        this.style = { font: "bold 34px Arial", fill: "#fff", tabs: [ 100, 300 ] };
        this.textStyle = { font: "28px Comic Sans MS",stroke: '#ffffff', strokeThickness: 4, fill: "#BE5446", tabs: [ 100, 300 ] };
        this.styleTextH = { font: "bold 58px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.styleTextH2 = { font: "bold 36px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        console.log('Leaderboard State');
        this.game.stage.backgroundColor = '#373F6C';
        game.global.menuBgSound.stop();
        
        this.buildInterface();
        
        this.showScore();
        
    },
    
    buildInterface: function(){
        
	//User Inteface
		var bar = this.add.graphics();
	    bar.beginFill(0xfae013);
	    bar.drawRect(0, 0, this.game.width, 75);
	    bar.endFill();

	    bar.beginFill(0x49B8E7, 1);
	    bar.drawRect(0, 75, this.game.width, 10);
	    bar.endFill();        

	    bar = this.add.graphics();
	    bar.beginFill(0x6ac8ed, 1);
	    bar.drawRect(0, 85, this.game.width, 10);
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

	    scoreText = this.add.text(5, 5, 'Highscore',this.styleTextH); 
		scoreText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);		    
                   
this.restartBtn = game.add.button(60,game.height-40,'restartBtn',function(){
this.game.state.start('Play');
},this);
        this.restartBtn.anchor.setTo(0.5,0.5);
        this.restartBtn.scale.setTo(0.5,0.5);
        this.restartBtn.input.useHandCursor = true;
        
        this.menuBtn = game.add.button(300,game.height-40,'menuBtn',function(){
this.game.state.start('Menu');
},this);
        this.menuBtn.anchor.setTo(0.5,0.5);
        this.menuBtn.scale.setTo(0.8,0.8);
        this.menuBtn.input.useHandCursor = true;
        
    },
     
        showScore: function(){
            const inputDiv = document.getElementById('input_div');
            if(inputDiv.classList.contains('name_hide')) {
                inputDiv.classList.remove('name_hide');
                inputDiv.classList.add('name');
            }
            inputDiv.style.top = window.innerHeight/2 + 'px';
            inputDiv.style.left = this.world.centerX-100 + 'px';

        const inputName = prompt('Name...');
        const sendBtn = document.querySelector('[value="Records"]');
        const btn = document.getElementById('btn');
        const userView = document.getElementById('user');
        let totalScore = game.global.score;
        
       
        var playerScore;
        let strLI = '';
        const URL = 'https://fe.it-academy.by/AjaxStringStorage2.php';
        const NAME = 'PAVLYUK_19880604';
        
        const REQUEST_TYPE = {
            READ: 'READ',
            LOCKGET: 'LOCKGET',
            UPDATE: 'UPDATE',
            INSERT: 'INSERT',
        } 
        
        //read
        
        
        var requestUsers = [];
        //update
        sendBtn.addEventListener('click', async () => {
            const users = await request(REQUEST_TYPE.READ, NAME);
            render(users);
         })
        sendBtn.addEventListener('click', async () => {
            // const { inputName } = inputName;
        const user = {
            inputName,
            totalScore
                }
        
            const updatePassword = Math.random();
            requestUsers.push(user);
            await request(REQUEST_TYPE.LOCKGET, NAME, updatePassword);
            await request(REQUEST_TYPE.UPDATE, NAME, updatePassword, JSON.stringify(requestUsers));
        });
        
        async function request(func, name, pass, val) {
        
            let sp = new URLSearchParams();
            sp.append('f', func);
            sp.append('n', name);
            pass && sp.append('p', pass);
            val && sp.append('v', val);
        
            try {
                const response = await fetch(URL, { method: 'POST', body: sp })
                const data = await response.json();
        
                if(data.result === 'OK'){
                    // alert('Success');
        
                    return;
                }
        
                return JSON.parse(data.result);
            } catch (err) {
                alert(err)
            }
        }
        
       
            function render(users){
                // let users = [...arr]
                // .reduce((a, c) => (a.map(e=>e.inputName).includes(c.inputName) || a.push(c), a), []);
                
                users.forEach(user => {
                    strLI += `
                    <li>Name: ${user.inputName} <br> Score: ${user.totalScore}</li>`
                });
                userView.innerHTML = strLI;
            }

            









        var playerScore;
    //     // alert(sessionStorage.getItem('my-input_save'));
            if(localStorage.getItem('highscore')===null){
                localStorage.setItem('highscore',game.global.score);
            }
            else if(game.global.score>localStorage.getItem('highscore')){
                  localStorage.setItem('highscore',game.global.score);        
            }
                    
                playerScore = this.add.text(this.world.centerX,180,'Highscore - '+localStorage.getItem('highscore'),this.textStyle);
                playerScore.anchor.setTo(0.5,0.5);
            
     var currentScore = this.add.text(this.world.centerX,250,'Your Score - '+game.global.score,this.textStyle);
            currentScore.anchor.setTo(0.5);
            
            
        } // end showScore
    
    
}