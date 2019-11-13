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
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("li", null, "1"),
            React.createElement("li", null, "2"),
            React.createElement("li", null, "3"),
            React.createElement("li", null, "4")));
    };
    return List;
}(React.Component));
var List2 = /** @class */ (function (_super) {
    __extends(List2, _super);
    function List2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List2.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("li", null, "a"),
            React.createElement("li", null, "b"),
            React.createElement("li", null, "c"),
            React.createElement("li", null, "d")));
    };
    return List2;
}(React.Component));
var template = React.createElement("ul", null,
    React.createElement(List, null),
    React.createElement(List2, null));
var el = document.querySelector('#demo');
ReactDOM.render(template, el);
