module Game{
    export class GameScreenState extends Phaser.State{
        game: Phaser.Game;
        music: Phaser.Sound;
        background: Phaser.Sprite;

        constructor(){
            super();
        }
        create(){
            this.background = this.add.sprite(0,0,"titleScreen");
        }
    }
}
