var cursor;
var bombButton;

class GameApp{
    game: Phaser.Game;

    constructor(){
        this.game = new Phaser.Game(800,600,Phaser.AUTO,'content',
        {preload: this.preload, create: this.create})
    }
    preload(){
        this.game.load.image("titleScreen", "Graphics/titleScreen.png");
        this.game.load.image("tile", "Graphics/tile.png");
        this.game.load.image("bomb", "Graphics/bomb.png");
        this.game.load.image("tempPlayer", "Graphics/tempPlayer.png");
    }
    create(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        cursor = this.game.input.keyboard.createCursorKeys();
        bombButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        //this.game.state.add("TitleScreenState", Game.TitleScreenState, true);
        this.game.state.add("GameScreenState", Game.GameScreenState, true);
    }

}

window.onload = () => {
    var game = new GameApp();
};
