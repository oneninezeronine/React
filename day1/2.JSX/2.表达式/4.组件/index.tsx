(() => {
    // 组件的本质是一个构造函数
    // 组件是一个独立的作用域
    // 只有函数才有私有作用域
    const Abc = ()=>{
        const data = {
            title: 'hello world'
        }
        const methods = {
            test(){
                console.log(1)
                return 1
            }
        }
        return <div onClick={methods.test}>{methods.test()}</div>
    } 
    const template = <div>
        {Abc()}
        {Abc()}
        {Abc()}
        {Abc()}
        {Abc()}
        <Abc/>
        <Abc/>
        <Abc/>
        <Abc/>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();