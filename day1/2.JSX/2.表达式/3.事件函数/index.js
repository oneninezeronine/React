(function () {
    var data = {
        name: 'yao',
        num: 50,
        style: {
            fontSize: "50px",
            color: 'red'
        }
    };
    var methods = {
        test: function () {
            console.log(1);
        },
        // 函数必须有return值，它就会多一个独特的用法
        renderNum: function () {
            return 1;
        }
    };
    var template = React.createElement("div", null,
        React.createElement("button", { onClick: methods.test }, "\u89E6\u53D1\u4E8B\u4EF6"),
        React.createElement("p", null, methods.renderNum()));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
