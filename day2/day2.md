# props

如果你需要让组件呈现不同的状态，你可以考虑用props，这种是可以让组件(函数)获取外部的参数

```js
// props或者插槽可以实现更改状态，父传子方法
// props的本质是函数从外界得到的参数
const Header = (props) => {
    console.log(props)
    return <header style={{
        backgroundColor: props.color ? props.color : 'red'
    }}>{props.title}</header>
}
const template = <div>
    {Header({ title: "微信" })}
    <Header title="支付宝" color="blue" />
</div>
const el = document.querySelector('#demo')
ReactDOM.render(template, el)
```
你还可以带jsx结构进去，让组件接受该结构渲染，这种其实就是插槽
```jsx
<Header title="支付宝" color="blue" html={<span>你好</span>} />
```
你还可以传函数进去，传数组对象等
```jsx
<Header title="支付宝" color="blue" fn={() => { console.log(1) }} html={<span>你好</span>} />
```
组件的封装本质就是函数的封装，该函数接受不同的值，就会返回不同的结果，组件接受不同props，就会返回不同的视图

# 函数 vs 组件 vs 模块

函数在js里面地位非常高

函数有一个JS里面的唯一特权

JS里面全局作用域和局部作用域(函数)，es6块级作用域

组件，模块化其实就是在用函数这个特权，如果函数没有特权，那么就没有我们所说的组件化和模块化

# 类组件

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

但是在es6里面有一个全新的语法，上面的写法在es6，有下面一个语法糖(新的写法)对应实现
```js
class Welcome(props) {
    constuctor(props){
        super(props)
        return <h1>Hello, {props.name}</h1>;
    }
}
```
这种类可以继承`React.Component`拿到组件原本没有的一些新方法，该`React.Component`父组件帮你的组件写了很多内置的方法
```js
class Welcome extends React.Component {
  // 该组件的view，对应函数的return的值
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
类组件，Header它继承`React.Component`，但是继承之后，后面的Footer组件可以继承Header，那Footer的方法可以根据原型链里面往下寻找
```js
// 类组件，本质是一个构造函数，所以首字母必须大写
class Header extends React.Component {
    render() {
        return (<div>头部</div>)
    }
    test(){
        console.log(1)
    }
}
class Footer extends Header {
    render() {
        return (<div>底部</div>)
    }
}
ReactDOM.render(
    <div>
        <Header />
        <Footer />
    </div>
    , document.querySelector('#demo')
)
```

# state 和 props

在类组件里面获取props很简单，props是外部给你的数据，只读的，一般不改变
```js
class NewHeader extends React.Component {
    constructor(props) {
        // 继承原来的React.Component props，必须要写
        super(props)
        // 我们可以在这里使用this.props获取组件拿到的name="yao"
        // this.props.name
    }
}
ReactDOM.render(
    <div>
        <NewHeader name="abc" />
    </div>
    , document.querySelector('#demo')
)
```
state表明的是组件内部的私有数据，state是组件内部可以改变的，在组件内部使用`this.state.xx`获取，然后由于继承了`React.Component`，这个组件自带`setState`的方法，所以可以允许配合函数触发`setState`更改组件内部状态(数据)，从而更改视图，

- MVVM Model <-> View Vue   {{}}
- State View VS框架   State -> View      View--事件+setState-->Model--> View  {}

```js
class Tool extends React.Component {
    
    // M
    // 相当于vue里面的data
    // 必须命名为state
    // 1.写法一
    state: {
        name: string,
        skill: string[]
    } = {
        name: 'yao',
        skill: ['ps', 'js']
    }
    constructor(props) {
        super(props)
        // 创建前
        // 1.写法二
        // this.state = {
        //     name: 'yao'
        // }
        // 创建后
    }
    test(){
        this.setState({
            name: 'lin',
            skill: ['abc']
        })
    }
    // V
    render() {
        return (<div onClick={this.test.bind(this)} name={this.state.skill[0]}>{this.state.name}</div>)
    }
}
ReactDOM.render(
    <div>
        <Tool />
    </div>
    , document.querySelector('#demo')
)
```

# 生命周期

组件的生命周期可分成三个状态：

<!-- - compile 编译前后 -->

- Create Vue独有
- Mounting：已插入真实 DOM
- Updating：正在被重新渲染
- Activate Vue独有
- Unmounting：已移出真实 DOM

|vue|react|
|-|-|
|beforeCreate|constructor|
|created|constructor|
|beforeMount|componentWillMount|
|render|render|
|mounted|componentDidMount(稳定)|
|beforeUpdate|componentWillUpdate|
|render|render|
|updated|componentDidUpdate|
|无 computed/watch|componentWillReceiveProps|
|activated|无|
|deactivated|无|
|无|shouldComponentUpdate|
|beforeDestroy|componentWillUnmount|
|destroyed|无|


```js
class Tool extends React.Component {
    shouldComponentUpdate(){
        if(this.state.name.length>9){
            return true
        }else{
            return false
        }
    }
}
```

# refs

某些情况，数据驱动完成不了的事情，可能要交给节点去做，那么你可以使用ref

先需要在jsx对应的节点上面放一个ref属性，如果你直接原生去拿`document.querySelector('input')`，ref可以帮助你完成对虚拟DOM和真实DOM的节点同步获取和更新

```html
<input ref="input" />
```
然后在方法或者生命周期里面使用下面这个方法获取节点
```js
this.refs.input.focus()
```