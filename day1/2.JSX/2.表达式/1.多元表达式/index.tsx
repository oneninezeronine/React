(() => {
    interface Data {
        name: string,
        num: number
    }
    const data: Data = {
        name: 'yao',
        num: 1
    }
    const template = <div>
        <p>1.三元表达式</p>
        {0 ? data.name : '假的'}
        <p>2.二元表达式</p>
        {data.name + '123'}
        <p>3.一元表达式</p>
        {-data.num}
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();