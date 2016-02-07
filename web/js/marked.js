var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MarkdownEditor = (function (_super) {
    __extends(MarkdownEditor, _super);
    function MarkdownEditor() {
        var _this = this;
        _super.call(this);
        this.handleChange = function () {
            _this.setState({ value: _this.refs['textarea'].value });
        };
        this.rawMarkup = function () {
            return { __html: marked(_this.state.value, { sanitize: true }) };
        };
        this.state = { value: 'Type some *markdown* here!' };
    }
    MarkdownEditor.prototype.render = function () {
        return (React.createElement("div", {className: "MarkdownEditor"}, React.createElement("h3", null, "Input"), React.createElement("textarea", {onChange: this.handleChange, ref: "textarea", defaultValue: this.state.value}), React.createElement("h3", null, "Output"), React.createElement("div", {className: "content", dangerouslySetInnerHTML: this.rawMarkup()})));
    };
    return MarkdownEditor;
}(React.Component));
ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById('container'));
