var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Game;
(function (Game) {
    (function (PlayerMovementState) {
        PlayerMovementState[PlayerMovementState["IDLE"] = 0] = "IDLE";
        PlayerMovementState[PlayerMovementState["WALK"] = 1] = "WALK";
    })(Game.PlayerMovementState || (Game.PlayerMovementState = {}));
    var PlayerMovementState = Game.PlayerMovementState;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            this.game = game;
            this.leftArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.leftArrow.onDown.add(Player.prototype.moveLeft, this);
            this.rightArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.rightArrow.onDown.add(Player.prototype.moveRight, this);
            this.upArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this.upArrow.onDown.add(Player.prototype.moveUp, this);
            this.downArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this.downArrow.onDown.add(Player.prototype.moveDown, this);
            this.startIdle();
            _super.call(this, this.game, 0, 0);
        }
        Player.prototype.moveLeft = function () {
            if (this.playerState != PlayerMovementState.IDLE) {
            }
        };
        Player.prototype.moveRight = function () {
        };
        Player.prototype.moveUp = function () {
        };
        Player.prototype.moveDown = function () {
        };
        Player.prototype.startIdle = function () {
        };
        return Player;
    })(Phaser.Sprite);
    Game.Player = Player;
})(Game || (Game = {}));
