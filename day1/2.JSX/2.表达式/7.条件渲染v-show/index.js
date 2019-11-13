(function () {
    // v-if
    var Vif = function () {
        var num = 6;
        return React.createElement("div", { style: {
                display: num > 7 ? 'block' : 'none'
            } }, "\u663E\u793A\u6216\u8005\u9690\u85CF");
    };
    // View
    var template = React.createElement("div", null,
        React.createElement(Vif, null));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
