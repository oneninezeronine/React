interface State {
    isFocus: boolean,
    searchText: string
}
class Search extends React.Component {
    state: State = {
        isFocus: true,
        searchText: ''
    }
    toggle() {
        // this.isFocus = !this.isFocus
        this.setState({
            isFocus: !this.state.isFocus
        })
        // 聚焦输入框
        this.refs.input.focus()
    }
    getInputValue(event) {
        console.log(event.target.value)
        this.setState({
            searchText: event.target.value
        })
    }
    clear() {
        console.log(this)
        this.setState({
            searchText: ''
        })
        // 聚焦输入框
        this.refs.input.focus()
    }
    render() {
        let { isFocus } = this.state
        return (
            <div className={isFocus ? 'weui-search-bar' : 'weui-search-bar weui-search-bar_focusing'} id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input ref="input" value={this.state.searchText} onChange={this.getInputValue.bind(this)} type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <a onClick={this.clear.bind(this)} className="weui-icon-clear" id="searchClear"></a>
                    </div>
                    <label onClick={this.toggle.bind(this)} className="weui-search-bar__label" id="searchText" style={{
                        transformOrigin: '0px 0px',
                        opacity: 1,
                        transform: 'scale(1, 1)'
                    }}>
                        <i className="weui-icon-search"></i>
                        <span>搜索</span>
                    </label>
                </form>
                <a onClick={this.toggle.bind(this)} className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
            </div>
        )
    }
}