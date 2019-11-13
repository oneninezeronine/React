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
    Header.prototype.componentWillMount = function () {
        window.a = 1;
        window.atimer = window.setInterval(function () {
            console.log('定时器');
        }, 1000);
        window.onscroll = function () {
            console.log('滚动');
        };
        console.log('--------componentWillMount---------');
    };
    Header.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null, this.state.inputValue),
            React.createElement("input", { value: this.state.inputValue, onChange: this.getInputValue.bind(this) })));
    };
    // 组件销毁的时候触发
    Header.prototype.componentWillUnmount = function () {
        // 带走定时器和全局变量
        window.onscroll = null;
        delete window.a;
        clearInterval(window.atimer);
        console.log('--------componentWillUnmount---------');
    };
    return Header;
}(React.Component));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            bool: true
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("button", { onClick: function () {
                    _this.setState({
                        bool: !_this.state.bool
                    });
                } }, "ok"),
            this.state.bool ? this.props.component : ''));
    };
    return App;
}(React.Component));
var template = React.createElement("div", { style: {
        height: '2000px'
    } },
    React.createElement(App, { component: React.createElement(Header, null) }));
var el = document.querySelector('#demo');
ReactDOM.render(template, el);
