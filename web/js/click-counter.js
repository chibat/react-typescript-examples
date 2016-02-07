var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = this;
        _super.call(this);
        this.handleClick = function () {
            _this.setState({ clickCount: _this.state.clickCount + 1 });
        };
        this.state = { clickCount: 0 };
    }
    Counter.prototype.render = function () {
        return (React.createElement("h2", {onClick: this.handleClick}, "Click me! Number of clicks: ", this.state.clickCount));
    };
    return Counter;
}(React.Component));
;
ReactDOM.render(React.createElement(Counter, null), document.getElementById('message'));
