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
    const template = <div>
        <p>1.属性值</p>
        <p age="18" kkk={data.num} name={0 ? data.name : '假的'}>
            {0 ? data.name : '假的'}
        </p>
        <p>2.属性值 style</p>
        <p class={
            data.num < 0 ? 'abc' : 'cba'
        }>
            {0 ? data.name : '假的'}
        </p>
        <p>3.属性值 class</p>
        <p style={{
            fontSize: `${data.num}px`,
            color: 'red'
        }}>
            {0 ? data.name : '假的'}
        </p>
        <p style={data.style}>
            {0 ? data.name : '假的'}
        </p>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();