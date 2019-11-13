(() => {
    // v-if
    const Vif = () => {
        let num: number = 6
        return <div style={{
            display: num > 7 ? 'block' : 'none'
        }}>显示或者隐藏</div>
    }
    // View
    const template = <div>
        <Vif/>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();