/// <reference path="typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        var _this = this;
        _super.call(this);
        this.tick = function () {
            _this.setState({ secondsElapsed: _this.state.secondsElapsed + 1 });
        };
        this.state = { secondsElapsed: 0 };
    }
    Timer.prototype.componentDidMount = function () {
        this.interval = setInterval(this.tick, 1000);
    };
    Timer.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    Timer.prototype.render = function () {
        return (React.createElement("div", null, "Seconds Elapsed: ", this.state.secondsElapsed));
    };
    return Timer;
})(React.Component);
;
ReactDOM.render(React.createElement(Timer, null), document.getElementById('container'));
