/// <reference path="typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function value(e) {
    return e.target.value;
}
var TodoList = (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        _super.apply(this, arguments);
    }
    TodoList.prototype.render = function () {
        var createItem = function (itemText, index) {
            return React.createElement("li", {"key": index + itemText}, itemText);
        };
        return React.createElement("ul", null, this.props.items.map(createItem));
    };
    return TodoList;
})(React.Component);
var TodoApp = (function (_super) {
    __extends(TodoApp, _super);
    function TodoApp() {
        var _this = this;
        _super.call(this);
        this.handleSubmit = function (e) {
            e.preventDefault();
            var nextItems = _this.state.items.concat([_this.state.text]);
            var nextText = '';
            _this.setState({ items: nextItems, text: nextText });
        };
        this.state = { items: [], text: '' };
    }
    TodoApp.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement("h3", null, "TODO"), React.createElement(TodoList, {"items": this.state.items}), React.createElement("form", {"onSubmit": this.handleSubmit}, React.createElement("input", {"onChange": function (e) { return _this.setState({ text: value(e) }); }, "value": this.state.text}), React.createElement("button", null, 'Add #' + (this.state.items.length + 1)))));
    };
    return TodoApp;
})(React.Component);
ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('container'));
