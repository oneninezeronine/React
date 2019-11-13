var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            inputValue: ''
        };
        return _this;
    }
    Header.prototype.getInputValue = function (e) {
        this.setState({
            // 做一个过滤拦截
            inputValue: e.target.value
        });
    };
    Header.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null, this.state.inputValue),
            React.createElement("input", { value: this.state.inputValue, onChange: this.getInputValue.bind(this) })));
    };
    // react独有生命周期，用于性能的优化
    Header.prototype.shouldComponentUpdate = function () {
        if (this.state.inputValue.length > 9) {
            // 停止更新
            return false;
        }
        else {
            return true;
        }
    };
    return Header;
}(React.Component));
var template = React.createElement("div", null,
    React.createElement(Header, null));
var el = document.querySelector('#demo');
ReactDOM.render(template, el);
