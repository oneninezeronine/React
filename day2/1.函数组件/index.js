(function () {
    // props或者插槽可以实现更改状态，父传子方法
    // props的本质是函数从外界得到的参数
    // 插槽
    // 组件的封装本质就是函数的封装
    // 该函数接受不同的值，就会返回不同的结果
    // 组件接受不同props，就会返回不同的视图
    var Header = function (props) {
        console.log(props);
        return React.createElement("header", { onClick: props.fn || null, style: {
                backgroundColor: props.color ? props.color : 'red'
            } },
            props.title,
            props.html || '');
    };
    var template = React.createElement("div", null,
        Header({ title: "微信" }),
        React.createElement(Header, { title: "\u652F\u4ED8\u5B9D", color: "blue", fn: function () { console.log(1); }, html: React.createElement("span", null, "\u4F60\u597D") }));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
