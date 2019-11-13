(() => {
    // props或者插槽可以实现更改状态，父传子方法
    // props的本质是函数从外界得到的参数
    // 插槽
    // 组件的封装本质就是函数的封装
    // 该函数接受不同的值，就会返回不同的结果
    // 组件接受不同props，就会返回不同的视图
    const Header = (props) => {
        console.log(props)
        return <header onClick={props.fn || null} style={{
            backgroundColor: props.color ? props.color : 'red'
        }}>{props.title}{props.html || ''}</header>
    }
    const template = <div>
        {Header({ title: "微信" })}
        <Header title="支付宝" color="blue" fn={() => { console.log(1) }} html={<span>你好</span>} />
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();