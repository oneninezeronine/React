(() => {
    interface Data {
        name: string,
        num: number,
        style: {
            fontSize: string,
            color: string
        }
    }
    const data: Data = {
        name: 'yao',
        num: 50,
        style: {
            fontSize: `50px`,
            color: 'red'
        }
    }
    const methods = {
        test(){
            console.log(1)
        },
        // 函数必须有return值，它就会多一个独特的用法
        renderNum(){
            return 1
        }
    }
    const template = <div>
        <button onClick={methods.test}>触发事件</button>
        <p>{methods.renderNum()}</p>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();