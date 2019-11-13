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
;
(function () {
    // 类组件，本质是一个构造函数，所以首字母必须大写
    var Tool = /** @class */ (function (_super) {
        __extends(Tool, _super);
        function Tool(props) {
            return _super.call(this, props) || this;
        }
        Tool.prototype.render = function () {
            return (React.createElement("div", null, this.props.name));
        };
        Tool.prototype.test = function () {
            console.log(1);
        };
        Tool.prototype.ajax = function () { };
        Tool.prototype.getCookie = function () { };
        Tool.prototype.getUrlParams = function () { };
        return Tool;
    }(React.Component));
    var NewHeader = /** @class */ (function (_super) {
        __extends(NewHeader, _super);
        function NewHeader(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                name: '你好'
            };
            return _this;
        }
        NewHeader.prototype.test = function () {
            console.log(2);
        };
        return NewHeader;
    }(Tool));
    console.log(new NewHeader({
        name: 'abc'
    }));
    ReactDOM.render(React.createElement("div", null,
        React.createElement(Tool, { name: "yao" }),
        React.createElement(NewHeader, { name: "abc" })), document.querySelector('#demo'));
})();
