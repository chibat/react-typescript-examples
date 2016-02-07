var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExampleApplication = (function (_super) {
    __extends(ExampleApplication, _super);
    function ExampleApplication() {
        _super.apply(this, arguments);
    }
    ExampleApplication.prototype.render = function () {
        var elapsed = Math.round(this.props.elapsed / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
        var message = 'React has been successfully running for ' + seconds + ' seconds.';
        return React.createElement("p", null, message);
    };
    return ExampleApplication;
}(React.Component));
;
var start = new Date().getTime();
setInterval(function () {
    ReactDOM.render(React.createElement(ExampleApplication, {elapsed: new Date().getTime() - start}), document.getElementById('container'));
}, 50);
