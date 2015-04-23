var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Game;
(function (Game) {
    var TitleScreenState = (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            _super.call(this);
        }
        TitleScreenState.prototype.create = function () {
            this.titleScreen = this.add.sprite(0, 0, "titleScreen");
        };
        return TitleScreenState;
    })(Phaser.State);
    Game.TitleScreenState = TitleScreenState;
})(Game || (Game = {}));
