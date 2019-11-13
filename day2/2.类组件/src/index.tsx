; (() => {
    // 类组件，本质是一个构造函数，所以首字母必须大写
    class Tool extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return (<div>{this.props.name}</div>)
        }
        test() {
            console.log(1)
        }
        ajax() { }
        getCookie() { }
        getUrlParams() { }
    }
    class NewHeader extends Tool {
        constructor(props) {
            super(props)
            this.state = {
                name: '你好'
            }
        }
        test() {
            console.log(2)
        }
    }
    console.log(new NewHeader({
        name: 'abc'
    }))
    ReactDOM.render(
        <div>
            <Tool name="yao" />
            <NewHeader name="abc" />
        </div>
        , document.querySelector('#demo')
    )
})();