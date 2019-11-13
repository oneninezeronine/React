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
    var Tool = /** @class */ (function (_super) {
        __extends(Tool, _super);
        function Tool(props) {
            var _this = _super.call(this, props) || this;
            // M
            // 相当于vue里面的data
            // 必须命名为state
            _this.state = {
                name: 'yao',
                skill: ['ps', 'js']
            };
            return _this;
            // this.state = {
            //     name: 'yao'
            // }
        }
        Tool.prototype.test = function () {
            console.log(this);
            this.setState({
                name: 'lin',
                skill: ['abc']
            });
        };
        // V
        Tool.prototype.render = function () {
            return (React.createElement("div", { onClick: this.test.bind(this), name: this.state.skill[0] }, this.state.name));
        };
        return Tool;
    }(React.Component));
    ReactDOM.render(React.createElement("div", null,
        React.createElement(Tool, null)), document.querySelector('#demo'));
})();
