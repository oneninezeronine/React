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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        return (React.createElement("div", null, "List1"));
    };
    return List;
}(React.Component));
// higherOrderComponent
var HOC = function (props) {
    return function (Component) {
        return function () {
            return React.createElement(Component, __assign({}, props));
        };
    };
};
var HOCList2 = HOC({
    getCookie: function () { }
})(HOC({
    ajax: function () { }
})(/** @class */ (function (_super) {
    __extends(List2, _super);
    function List2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List2.prototype.render = function () {
        return (React.createElement("div", null, "List"));
    };
    return List2;
}(React.Component))));
// 这个List组件合并了一个全新props，返回得到一个拥有更多功能的List组件
// List -> HOCList
var HOCList = HOC({
    name: 'yao'
})(List);
console.log(HOCList);
var template = React.createElement("ul", null,
    React.createElement(List, null),
    React.createElement(HOCList, null),
    React.createElement(HOCList2, null));
var el = document.querySelector('#demo');
ReactDOM.render(template, el);
