(function () {
    // v-if
    var Vif = function () {
        var num = 3;
        // 既可以用switch也可以用if，还可以用三元表达式
        switch (num) {
            case 1:
            case 2:
            case 3:
                return 1;
            case 7:
            case 8:
                return 8;
        }
    };
    // View
    var template = React.createElement("div", null,
        (function () {
            var num = 8;
            if (num > 7) {
                return React.createElement("div", null, "\u771F\u7684");
            }
            else {
                return React.createElement("div", null, "\u5047\u7684");
            }
        })(),
        Vif(),
        React.createElement(Vif, null));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
