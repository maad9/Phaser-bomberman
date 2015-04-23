module Game{
    export class TitleScreenState extends Phaser.State{
        game: Phaser.Game;
        music: Phaser.Sound;
        titleScreen: Phaser.Sprite;

        constructor(){
            super();
        }
        create(){
            this.titleScreen = this.add.sprite(0,0,"titleScreen");

        }
    }
}
