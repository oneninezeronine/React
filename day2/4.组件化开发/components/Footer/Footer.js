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
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement("div", { className: "weui-tabbar" },
            React.createElement("a", { className: "weui-tabbar__item weui-bar__item_on" },
                React.createElement("span", { style: {
                        display: 'inline-block',
                        position: ' relative'
                    } },
                    React.createElement("img", { src: "./images/icon_tabbar.png", alt: "", className: "weui-tabbar__icon" }),
                    React.createElement("span", { className: "weui-badge", style: { position: 'absolute', top: '-2px', right: '-13px' } }, "8")),
                React.createElement("p", { className: "weui-tabbar__label" }, "\u5FAE\u4FE1")),
            React.createElement("a", { className: "weui-tabbar__item" },
                React.createElement("img", { src: "./images/icon_tabbar.png", alt: "", className: "weui-tabbar__icon" }),
                React.createElement("p", { className: "weui-tabbar__label" }, "\u901A\u8BAF\u5F55")),
            React.createElement("a", { className: "weui-tabbar__item" },
                React.createElement("span", { style: {
                        display: 'inline-block',
                        position: ' relative'
                    } },
                    React.createElement("img", { src: "./images/icon_tabbar.png", alt: "", className: "weui-tabbar__icon" }),
                    React.createElement("span", { className: "weui-badge weui-badge_dot", style: {
                            position: 'absolute',
                            top: 0,
                            right: '-6px'
                        } })),
                React.createElement("p", { className: "weui-tabbar__label" }, "\u53D1\u73B0")),
            React.createElement("a", { className: "weui-tabbar__item" },
                React.createElement("img", { src: "./images/icon_tabbar.png", alt: "", className: "weui-tabbar__icon" }),
                React.createElement("p", { className: "weui-tabbar__label" }, "\u6211"))));
    };
    return Footer;
}(React.Component));
