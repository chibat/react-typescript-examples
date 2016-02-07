var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BootstrapButton = (function (_super) {
    __extends(BootstrapButton, _super);
    function BootstrapButton() {
        _super.apply(this, arguments);
    }
    BootstrapButton.prototype.render = function () {
        return (React.createElement("a", React.__spread({}, this.props, {href: "javascript:;", role: "button", className: (this.props.className || '') + ' btn'})));
    };
    return BootstrapButton;
}(React.Component));
var BootstrapModal = (function (_super) {
    __extends(BootstrapModal, _super);
    function BootstrapModal() {
        var _this = this;
        _super.apply(this, arguments);
        this.close = function () { return $(_this.refs['root']).modal('hide'); };
        this.open = function () { return $(_this.refs['root']).modal('show'); };
        this.handleCancel = function () {
            if (_this.props.onCancel) {
                _this.props.onCancel();
            }
        };
        this.handleConfirm = function () {
            if (_this.props.onConfirm) {
                _this.props.onConfirm();
            }
        };
    }
    BootstrapModal.prototype.componentDidMount = function () {
        $(this.refs['root']).modal({ backdrop: 'static', keyboard: false, show: false });
    };
    ;
    BootstrapModal.prototype.render = function () {
        return (React.createElement("div", {className: "modal fade", ref: "root"}, React.createElement("div", {className: "modal-dialog"}, React.createElement("div", {className: "modal-content"}, React.createElement("div", {className: "modal-header"}, React.createElement("button", {type: "button", className: "close", onClick: this.handleCancel}, "×"), React.createElement("h3", null, this.props.title)), React.createElement("div", {className: "modal-body"}, this.props.children), React.createElement("div", {className: "modal-footer"}, this.props.cancel ? (React.createElement(BootstrapButton, {onClick: this.handleCancel, className: "btn-default"}, this.props.cancel)) : null, this.props.confirm ? (React.createElement(BootstrapButton, {onClick: this.handleConfirm, className: "btn-primary"}, this.props.confirm)) : null)))));
    };
    return BootstrapModal;
}(React.Component));
var Example = (function (_super) {
    __extends(Example, _super);
    function Example() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleCancel = function () {
            if (confirm('Are you sure you want to cancel?')) {
                _this.refs['modal'].close();
            }
        };
        this.openModal = function () {
            _this.refs['modal'].open();
        };
        this.closeModal = function () {
            _this.refs['modal'].close();
        };
    }
    Example.prototype.render = function () {
        return (React.createElement("div", {className: "example"}, React.createElement(BootstrapModal, {ref: "modal", confirm: "OK", cancel: "Cancel", onCancel: this.handleCancel, onConfirm: this.closeModal, title: "Hello, Bootstrap!"}, "This is a React component powered by jQuery and Bootstrap!"), React.createElement(BootstrapButton, {onClick: this.openModal, className: "btn-default"}, "Open modal")));
    };
    ;
    return Example;
}(React.Component));
ReactDOM.render(React.createElement(Example, null), document.getElementById('jqueryexample'));
