# setState

类似改vuex和store state

> dispatch->action->commit->mutation->state->getters

改数据最好用方法去更改，而非直接更改，不然无法得知谁改变，对后期的维护不方便，数据来源不明确，无法跟踪

# 无障碍

`aria-`，往标签里面加入一些注释
```html
<input
  type="text"
  aria-label="搜索框-注释"
  aria-required="true"
  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>
```

# Fragment

一般组件是需要一个根节点的
```js
class List extends React.Component {
    render() {
        return (
            <div>
                111
            </div>
        )
    }
}
```
但是某些情况，需要返回多个兄弟节点，那可以使用`<React.Fragment>`把组件包含起来
```js
class List extends React.Component {
    render() {
        return (
            <React.Fragment>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </React.Fragment>
        )
    }
}
```

# 模块化

App文件：
```js
// app.js
import { add } from './math.js';

console.log(add(16, 26)); // 42
```
```js
// math.js
export function add(a, b) {
  return a + b;
}
打包后文件：

function add(a, b) {
  return a + b;
}

console.log(add(16, 26)); // 42
```

# context

会使用仓库实现，context，是爷爷的值，直接传给孙，组件从上往下直接传数据，一般不使用，

其实就是props的高级写法

Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
```js
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class Button extends React.Component {
    render(){
        return (<div>按钮</div>)
    }
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```

# 全局错误监听

在全局监听错误，一旦发现错误，立即使用img伪造一段请求出来，然后发送到后端，后端记录
```js
window.onerror = (msg, url, line) => {
    console.log(msg, url, line)
    // 不用ajax，用图片发请求，ajax是可以获取响应头和响应体，只发却没结果
    let img = new Image()
    img.src = `http://localhost:3000/error?msg=${msg}&url=${url}&line=${line}`
    img.alt = '出现错误'
    img.style.display = 'none'
    document.body.appendChild(img)
}
```

# 闭包

函数才可以创建独立的作用域
```js
function a() {
    // 内存越来越大
    let b = 1
    function c(b){
        return b
    }
    return c
}
// 函数类似一个虫洞，突破函数的作用域，直接进去获取该b的值
// 没有垃圾回收机制
let fn = a()
console.log(a())
```

# 高阶组件

组件本身没有的，可以通过高阶组件，让它重新拥有
```js
const HOC = (props) => {
    return (Component) => {
        return (Component2) => {
            return () => {
                return (
                    <div>
                        <Component {...props} />
                        <Component2 {...props} />
                    </div>
                )

            }
        }
    }
}
```
redux(vuex)底层其实就是使用了高阶组件，完成组件通信
```js
const store = {
    skill: '123',
    ajax(){},
    getCookie(){}
}
const HOCList = HOC(store)(List)(List)
const HOCList2 = HOC(store)(List)(List)

const template = <ul>
    <HOCList2/>
    <hr />
    <HOCList />
</ul>
```