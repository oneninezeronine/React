# React

用于构建用户界面的`JavaScript`库

库
 - jquery
 - axios

框架
 - express (后端)
 - vue
 - react

Vue(View)，数据层跟视图层，Vue大部分关注视图层

React，只关注UI(视图层)，也是一个MVVM框架

- 声明式渲染`<div>{{}}</div>`
- 组件化`<Header/><Header/><Header/>`
- 混合开发，既可以用在网页端，也可以手机端，或者PC端


这是`Vue`的写法
```html
<!-- View -->
<!-- 容器 -->
<div id="demo"></div>
<script src="vue.js"></script>
<script>
    new Vue({
        el:"#demo",
        data:{}
    })    
</script>
```

react的写法跟上面会有点一样
```html
<div id="demo"></div>
<!-- 提供React.createElement帮你构造虚拟DOM -->
<script src="react.js"></script>
<!-- 提供ReactDOM.render帮你虚拟DOM转化真实DOM -->
<script src="react-dom.js"></script>
<script>
    // react提供了全局变量window.React
    // react-dom提供了全局变量window.ReactDOM
    console.log(window)
    // 函数会执行，变成一个对象，这个对象其实是描述真实DOM的
    const data = {
        name: 'yao'
    }
    const template = React.createElement('div', null, data.name)
    const el = document.querySelector('#demo')
    console.log(template)
    ReactDOM.render(template, el)
</script>
```

react先把下面字符串转化为函数
```html
<div>hello world</div>
```
通过webpack转化
```js
React.createElement('div', null, data.name)
View = React.createElement('div', null, Model)
```
因为函数可以随时接受新的数据去执行，该函数在数据变化的时候会执行
```js
{
    $$typeof: Symbol(react.element)
    key: null
    props:
    children: "yao"
    __proto__: Object
    ref: null
    type: "div"
    _owner: null
    _store: {validated: false}
    _self: null
    _source: null
}
```
12313
不存着字符串，存对象，是因为后面对比字符串的难度太大，但是比对对象比较小，操作对象是成本是比较低，空间利用率变大，空间换时间


我们不可能每一次写都是用下面这种写法的
```js
React.createElement('div', null, data.name)
```
我们会用一种类似html的语法来去实现，这种语法JSX

```html
<div>{data.name}</div>
```

所以我们在页面可以使用`babel.js`帮我们转化，不过注意的是，在发布环境这份babel.js是不能引入的，jsx讲道理是一门预编译语言(地位相当于sass)，在实际项目中要把该处理放在`webpack`中去做处理，不应该把压力放在浏览器
```html
<div id="demo"></div>
<!-- 提供React.createElement帮你构造虚拟DOM -->
<script src="react.js"></script>
<!-- 提供ReactDOM.render帮你虚拟DOM转化真实DOM -->
<script src="react-dom.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const data = {
        name: 'yao'
    }
    // JSX
    const template = <div>hello world</div>
    const el = document.querySelector('#demo')
    console.log(template)
    ReactDOM.render(template, el)
</script>
```
在后期，我们会使用脚手架去搭建开发环境，内部使用 Babel 和 webpack，但你无需了解它们的任何细节
```bash
npx create-react-app my-app
# 当当于
npm install create-react-app -g
create-react-app my-app
```

# compile hero

你可以使用这个插件，写tsx后缀，它会自动帮你把ts和jsx功能结合在一起用

# jsx

```js
// js
const element = <h1>Hello, world!</h1>;
const elementHTML = '<h1>Hello, world!</h1>';
```
这个有趣的标签语法既不是字符串也不是 HTML。

|||
|-|-|
|js|.js|
|ts|.ts|
|jsx|.jsx|
|jsx+ts|.tsx|

jsx支持表达式

你可以使用一个大括号`{}`，放在标签里面，让它改变视图层的效果，react不像vue一样有指令，一切指令完成的事情都是jsx配合这个`{}`完成
```jsx
<div>{name}</div>
<div name={name}></div>
```

支持渲染多种表达式

```jsx
<div>
    <p>1.三元表达式</p>
    {0 ? data.name : '假的'}
    <p>2.二元表达式</p>
    {data.name + '123'}
    <p>3.一元表达式</p>
    {-data.num}
</div>
```

如果要绑定属性值，注意了style是要接受对象，并且里面的css属性要驼峰写法
```html
<div>
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
```

支持绑定函数，第三个字母为大写

|原生|react|vue|
|-|-|-|
|onclick|onClick|@click|
|onkeyup|onKeyup|@keyup|
|onchange|onChange|@change|
|onmousedown|onMousedown|@mousedown|

```html
<div>
    <button onClick={methods.test}>触发事件</button>
</div>
```

支持函数带return值，这种写法相当于组件，如果函数有return值的化，配合`{}`执行，那`return`视图就会出现什么，你可以拿这个函数直接执行，也可以拿这个函数当标签运行，一般变为标签，因为这样方便复用，该函数首字母必须为大写(构造函数)

```js
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
```

既然上面能这么做，也告诉我们，函数可以创造作用域，这样满足组件的特性，所以函数内部可以自带(数据，方法)，这些东西都是私有的，可以使用自执行匿名函数，构造出一个只有视图层，没有数据层的应用，不方便复用
```js
const template = <div>
    {()=>{
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
    }()}
</div>
```

条件渲染，我们可以用函数配合`if`或者`switch`或者`三元表达式`实现条件渲染
```js
const Vif = () => {
    let num: number = 8
    if (num > 7) {
        return <div>真的</div>
    } else {
        return <div>假的</div>
    }
}
// View
const template = <div>
    <Vif/>
    {Vif()}
</div>
```

列表渲染，类似v-for，它会把数组里面的选项一个个的渲染到界面
```js
const arr: number[] = [<p>1</p>, <p>2</p>, 3]
// View
const template = <div>
    {arr}
    {/* <ul>
        {arr}
    </ul> */}
</div>
```
指令的本质就是函数，函数其实就是组件，react就是最单纯的js思维
```js
interface teachersType {
    name: string,
    id: number
}
const teachers: teachersType[] = [{
    name: 'yao',
    id: 2
}, {
    name: 'jin',
    id: 3
}, {
    name: 'lin',
    id: 1
}]
const arr: number[] = [<p key="1">1</p>, <p key="2">2</p>, 3]
const template = <div>
    {arr}
    <ul>
        {(() => {
            let arr = []
            for (let i = 0; i < teachers.length; i++) {
                arr.push(<li key={i}>
                    {teachers[i].id} : {teachers[i].name}
                </li>)
            }
            return arr
        })()}
    </ul>
    <ul>
        {(() => {
            return teachers.map((item, index) => {
                return <li key={index}>
                    {item.id} : {item.name}
                </li>
            })
        })()}
    </ul>
</div>
```