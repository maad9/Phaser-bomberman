var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Game;
(function (Game) {
    var GameScreenState = (function (_super) {
        __extends(GameScreenState, _super);
        function GameScreenState() {
            _super.call(this);
        }
        GameScreenState.prototype.create = function () {
            this.background = this.add.sprite(0, 0, "titleScreen");
        };
        return GameScreenState;
    })(Phaser.State);
    Game.GameScreenState = GameScreenState;
})(Game || (Game = {}));
