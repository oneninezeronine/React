(() => {
    // v-if
    const Vif = () => {
        let num: number = 3
        // 既可以用switch也可以用if，还可以用三元表达式
        switch(num){
            case 1:
            case 2:
            case 3:
                return 1
            case 7:
            case 8:
                return 8
        }
    }
    // View
    const template = <div>
        {(() => {
            let num: number = 8
            if (num > 7) {
                return <div>真的</div>
            } else {
                return <div>假的</div>
            }
        })()}
        {Vif()}
        <Vif/>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();