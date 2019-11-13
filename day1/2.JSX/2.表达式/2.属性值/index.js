(function () {
    var data = {
        name: 'yao',
        num: 50,
        style: {
            fontSize: "50px",
            color: 'red'
        }
    };
    var template = React.createElement("div", null,
        React.createElement("p", null, "1.\u5C5E\u6027\u503C"),
        React.createElement("p", { age: "18", kkk: data.num, name: 0 ? data.name : '假的' }, 0 ? data.name : '假的'),
        React.createElement("p", null, "2.\u5C5E\u6027\u503C style"),
        React.createElement("p", { "class": data.num < 0 ? 'abc' : 'cba' }, 0 ? data.name : '假的'),
        React.createElement("p", null, "3.\u5C5E\u6027\u503C class"),
        React.createElement("p", { style: {
                fontSize: data.num + "px",
                color: 'red'
            } }, 0 ? data.name : '假的'),
        React.createElement("p", { style: data.style }, 0 ? data.name : '假的'));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
