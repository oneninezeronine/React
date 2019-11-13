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
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
var ThemeContext = React.createContext('light');
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
        // 无论多深，任何组件都能读取这个值。
        // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
        return (React.createElement(ThemeContext.Provider, { value: "dark" },
            React.createElement(Toolbar, null)));
    };
    return App;
}(React.Component));
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
    return (React.createElement("div", null,
        React.createElement(ThemedButton, null)));
}
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement("div", null, "\u6309\u94AE"));
    };
    return Button;
}(React.Component));
var ThemedButton = /** @class */ (function (_super) {
    __extends(ThemedButton, _super);
    function ThemedButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemedButton.prototype.render = function () {
        return React.createElement(Button, { theme: this.context });
    };
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    ThemedButton.contextType = ThemeContext;
    return ThemedButton;
}(React.Component));
var el = document.querySelector('#demo');
ReactDOM.render(React.createElement("div", null,
    React.createElement(App, null)), el);
