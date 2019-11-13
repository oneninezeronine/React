
class Header extends React.Component {
    state = {
        inputValue: ''
    }
    getInputValue(e) {
        this.setState({
            // 做一个过滤拦截
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.inputValue}</p>
                <input value={this.state.inputValue} onChange={this.getInputValue.bind(this)} />
            </div>
        )
    }
    // react独有生命周期，用于性能的优化
    shouldComponentUpdate() {
        if (this.state.inputValue.length > 9) {
            // 停止更新
            return false
        } else {
            return true
        }

    }
}

const template = <div>
    <Header />
</div>
const el = document.querySelector('#demo')
ReactDOM.render(template, el)