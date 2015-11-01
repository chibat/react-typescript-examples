var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
        this.dispScreen1 = function () {
            ReactDOM.render(React.createElement(Screen1, null), document.getElementById('main'));
        };
        this.dispScreen2 = function () {
            ReactDOM.render(React.createElement(Screen2, null), document.getElementById('main'));
        };
    }
    Header.prototype.render = function () {
        this.dispScreen1();
        return (React.createElement("div", null, React.createElement("a", {"href": "#", "onClick": this.dispScreen1}, "Screen1"), " | ", React.createElement("a", {"href": "#", "onClick": this.dispScreen2}, "Screen2")));
    };
    return Header;
})(React.Component);
var Screen1 = (function (_super) {
    __extends(Screen1, _super);
    function Screen1() {
        _super.apply(this, arguments);
    }
    Screen1.prototype.render = function () {
        return React.createElement("div", null, "Screen1");
    };
    Screen1.prototype.componentWillUnmount = function () {
        alert('called componentWillUnmount - Screen1');
    };
    return Screen1;
})(React.Component);
var Screen2 = (function (_super) {
    __extends(Screen2, _super);
    function Screen2() {
        _super.apply(this, arguments);
    }
    Screen2.prototype.render = function () {
        return React.createElement("div", null, "Screen2");
    };
    Screen2.prototype.componentWillUnmount = function () {
        alert('called componentWillUnmount - Screen2');
    };
    return Screen2;
})(React.Component);
ReactDOM.render(React.createElement(Header, null), document.getElementById('header'));
