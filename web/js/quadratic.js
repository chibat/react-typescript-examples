var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var quadratic;
(function (quadratic) {
    function value(e) {
        return e.target.value;
    }
    var QuadraticCalculator = (function (_super) {
        __extends(QuadraticCalculator, _super);
        function QuadraticCalculator() {
            _super.call(this);
            this.state = { a: 1, b: 3, c: -4 };
        }
        QuadraticCalculator.prototype.render = function () {
            var _this = this;
            var a = this.state.a;
            var b = this.state.b;
            var c = this.state.c;
            var root = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
            var denominator = 2 * a;
            var x1 = (-b + root) / denominator;
            var x2 = (-b - root) / denominator;
            return (React.createElement("div", null, React.createElement("strong", null, React.createElement("em", null, "ax"), React.createElement("sup", null, "2"), " + ", React.createElement("em", null, "bx"), " + ", React.createElement("em", null, "c"), " = 0"), React.createElement("h4", null, "Solve for ", React.createElement("em", null, "x"), ":"), React.createElement("p", null, React.createElement("label", null, "a: ", React.createElement("input", {"type": "number", "value": String(a), "onChange": function (e) { return _this.setState({ a: value(e) }); }})), React.createElement("br", null), React.createElement("label", null, "b: ", React.createElement("input", {"type": "number", "value": String(b), "onChange": function (e) { return _this.setState({ b: value(e) }); }})), React.createElement("br", null), React.createElement("label", null, "c: ", React.createElement("input", {"type": "number", "value": String(c), "onChange": function (e) { return _this.setState({ c: value(e) }); }})), React.createElement("br", null), "x: ", React.createElement("strong", null, x1, ", ", x2))));
        };
        return QuadraticCalculator;
    })(React.Component);
    ReactDOM.render(React.createElement(QuadraticCalculator, null), document.getElementById('container'));
})(quadratic || (quadratic = {}));
