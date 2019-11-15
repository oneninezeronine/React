# redux

Redux 是 JavaScript 状态容器，仓库

这里需要再强调一下：Redux 和 React 之间没有关系。可以用在 vue , react 和 jquery

- [redux github](https://github.com/reduxjs/redux)

如果你不用包(npm)管理工具，你可以去[unpkg](https://unpkg.com/browse/redux@4.0.4/dist/)下载一份`js`，它会在全局里面拥有`window.Redux`的全局变量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="redux.min.js"></script>
    <script>
        console.log(window.Redux)
    </script>
</body>
</html>
```

更多情况下，我们是在webpack环境下安装`redux`第三方模块
```bash
# 上面这个其实是够用的 (必选项)
npm install redux
# 但是你跟react开发的化，建议把下面两个模块也安装 (可选项)
npm install --save react-redux
npm install --save-dev redux-devtools
```

vuex有state,gettes,mutations和actions，redux里面没有getters和mutations

- vuex
    - actions 异步改
    - state 仓库
    - mutations 同步改
    - gettes 拿

- redux
    - actions 改(同步和异步)
    - state 仓库

counter函数包含了两个核心概念`state`和`action`
```js
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}
```
```js
import {
    createStore
} from 'redux';
const state = {
    name: 'yao',
    skill: ['ps', 'js']
}
const counter = (state, action) => {
    switch (action.type) {
        // 修改的动作
        case "SETNAME":
            return {
                ...state,
                name: 'lin'
            }
        default:
                return state;
    }
}
```
创建 Redux store 来存放应用的状态。

- subscribe 负责监听相当于computed，放到需要通信的组件一
- dispatch 负责触发action，放到需要通信的组件二
- getState 是一般配合subscribe监听，一旦状态发生改变，就监听最新的仓库值

```js
// store 提供了三个方法 { subscribe, dispatch, getState }。
const store = createStore(counter)
export default store;
```

下面就是使用的方法
```js
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT', name: 'lin' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
```

# react-redux

讲道理redux按照刚才的写法就已经可以和react混着使用，但是这种使用方法还不够科学

```bash
npm install --save redux
npm install --save react-redux
```
提供一个Provider，把仓库注册到全局，让所有组件都有机会访问
```js
import { Provider } from 'react-redux'
```
正常情况下，你需要把`store`存进两个组件，分别去改对应的仓库值，完成通信
```js
import { Provider } from 'react-redux'
import stores from './stores'
function RouterConfig({ history }) {
  return (
    <Provider store={stores}>
      <Router history={history}>
        <Switch>
          <Route path="/wechat" exact>
            <Wechat />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
```
现在组件要获取全局的仓库，必须使用`connect`把自身进阶高阶组件，才有权力获取仓库的值
```js
import { connect } from 'react-redux'
// export default class {
//     constructor(props){
//         super(props)
//         this.props = props
//         console.log(this)
//     }
// }
// HOC
export default connect((state)=>{
    return state
})(class {
    constructor(props){
        super(props)
        this.props = props
        console.log(this)
    }
})
```

# 路由

- redux 民间
- react-router 民间 
- react 官方


react-router和react可以没有任何关系

类似vue-router路由

- react-router
- react-router-dom 包含了react-router核心

[官方文档](https://reacttraining.com/react-router/web/guides/quick-start)

在模块化项目里面安装以下模块
```bash
npm install react-router-dom
cnpm install react-router-dom

# npm install yarn -g
yarn add react-router-dom
```

使用`HashRouter`或者`BrowserRouter`，一种是带#号的路由模式，一种不带
```js
import Home from './pages/Home/Home'
import {
    HashRouter as R
} from 'react-router-dom'
ReactDOM.render(
    <R>
        <Home/>
    </R>
, document.getElementById('root'));
```

我们可以配合`<switch>`和`<route>`
```js
<R>
    <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/mine">
            <Mine/>
        </Route>
    </Switch>
</R>
```
你可以配合`jsx`去封装路由配置
```jsx
const router = [
    {
        path: '/home',
        component: <Home/>
    },
    {
        path: '/mine',
        component: <Mine/>
    },
]
ReactDOM.render(
    <R>
        <Switch>
            {router.map((item,index)=>{
                return <Route key={index} path={item.path}>
                    {item.component}
                </Route>
            })}
        </Switch>
    </R>
, document.getElementById('root'));
```
嵌套路由的写法
```js
<Switch>
    <Route path="/home">
        <Home/>
        <Route path="/home/a">
            <Childa/>
        </Route>
        <Route path="/home/b">
            <Childb/>
        </Route>
    </Route>

    <Route path="/mine">
        <Mine/>
    </Route>
</Switch>
```
如果你需要封装，你可以这样写
```js
const router = [
    {
        path: '/home',
        component: <Home/>,
        children : [{
            path: '/home/a',
            component: <Childa/>
        }, {
            path: '/home/b',
            component: <Childb/>
        }]
    },
    {
        path: '/mine',
        component: <Mine/>
    },
]
ReactDOM.render(
    <R>
        <Switch>
            {router.map((item,index)=>{
                return <Route key={index} path={item.path}>
                    {item.component}
                    {
                        item.children?(item.children.map((item2, index2)=>{
                            return <Route key={index2} path={item2.path}>
                                {item2.component}
                            </Route>
                        })):''
                    }
                </Route>
            })}
        </Switch>
    </R>
, document.getElementById('root'));
```

路由守卫，交给外层一个函数来实现路由拦截
```js
<R>
    {(() => {
        if (window.sessionStorage.getItem('login')*1) {
            return <Switch>{router.map((item, index) => {
                return <Route key={index} path={item.path}>
                    {item.component}
                    {
                        item.children ? (item.children.map((item2, index2) => {
                            return <Route key={`${index}-${index2}`} path={item2.path}>
                                {item2.component}
                            </Route>
                        })) : ''
                    }
                </Route>
            })}</Switch>
        } else {
            // 路由重定向
            return <div>返回登录页面</div>
        }
    })()}
</R>
```

声明式导航和编程式导航
```html
<Link to="/home/a">一</Link>
<Link to="/home/b">二</Link>
```

编程式导航，配合`<withRouter>`帮你把组件进阶为高阶组件，允许`this.props.location`和`this.props.history`，用于获取路由参数，用于编程式导航
```html
<template name="Detail">
    <div>详情页
        <button onClick={this.toHomePage.bind(this)}>编程式导航</button>
    </div>
</template>
<script>
    import {
        useParams,
        withRouter
    } from "react-router-dom";
    export default withRouter(class {
        constructor(props){
            super(props)
            
        }
        toHomePage(){
            this.props.history.push('/home')
        }
        componentDidMount(){
            console.log(this)
            // console.log(useParams())
        }
    })
</script>
```

重定向
```html
<Redirect to="/home" />
```

# socket

https://github.com/Wscats/socket.io

https://github.com/Wscats/node-tutorial/issues/7