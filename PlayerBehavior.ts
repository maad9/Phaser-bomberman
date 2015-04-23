module Game{
    export enum PlayerMovementState{ IDLE, WALK }
    export class Player extends Phaser.Sprite{
        game: Phaser.Game;
        playerState: PlayerMovementState;
        leftArrow: Phaser.Key;
        rightArrow: Phaser.Key;
        upArrow: Phaser.Key;
        downArrow: Phaser.Key;
        bombs: number;

        constructor( game: Phaser.Game, x:number, y:number){
            this.game = game;
            this.leftArrow = this.game.input.keyboard.addKey
            (Phaser.Keyboard.LEFT);
            this.leftArrow.onDown.add(Player.prototype.moveLeft, this);

            this.rightArrow = this.game.input.keyboard.addKey
            (Phaser.Keyboard.RIGHT);
            this.rightArrow.onDown.add(Player.prototype.moveRight, this);

            this.upArrow = this.game.input.keyboard.addKey
            (Phaser.Keyboard.UP);
            this.upArrow.onDown.add(Player.prototype.moveUp, this);

            this.downArrow = this.game.input.keyboard.addKey
            (Phaser.Keyboard.DOWN);
            this.downArrow.onDown.add(Player.prototype.moveDown, this);

            this.startIdle();

            super(this.game, 0, 0);
        }
        moveLeft(){
            if(this.playerState != PlayerMovementState.IDLE){

            }
        }
        moveRight(){

        }
        moveUp(){

        }
        moveDown(){

        }
        startIdle(){
            
        }
    }
}
