# create-react-app

react/cli的脚手架，create-react-app脚手架

vue会使用vue/cli(command line interface)来去搭建一个webpack的开发环境

```bash
# 这条等价于下面的这些命令
npx create-react-app my-app
# or
npm install create-react-app -g
create-react-app my-app
cd my-app

npm start
# 检查是否安装成功
create-react-app -V
```
yarn和react都是facebook

- react-app
    - node_modules 第三方模块文件夹
    - public 共有的模板的文件 template文件夹
    - src 入口文件夹
    - .gitignore git要忽略的文件
    - package.json 项目的配置
    - README.md
    - yarn.lock 项目的配置
    - tsconfig.json 当你项目有ts文件，它会自动生成，不过你需要手动安装 `yarn add typescript&&npm install typescript`


可以使用`xxx.eno`后缀，然后`Eno Snippets`，可以帮你自动把单文件组件转`React`的`JS`后缀组件，你可以安装以下模块去实现局部样式
```bash
npm install styled-components
```

# dva

安装 dva-cli
通过 npm 安装 dva-cli 并确保版本是 0.9.1 或以上。
```bash
npm install dva-cli -g
dva -v
dva-cli version 0.9.1
```
创建一个项目
```bash
dva new dva-quickstart
cd dva-quickstart
npm start
```

- mock 模拟数据 里面放着空的json静态数据，写死的数据，用于测试
- public 模板文件
- src
  - assets 静态资源文件，图片，样式
  - components 组件
  - models redux仓库
  - routes react-router路由，页面组件
  - services api接口，封装接口，获取数据
  - utils 里面是一些封装的工具库，比如帮你封装request来触发ajax，封装cookie，本地存储
  - index.css 全局样式
  - index.js 入口文件
  - router.js 路由配置文件

修改`node_modules`文件夹下`dva/lib/index.js`第22行改为下面：
```
var _createHashHistory = _interopRequireDefault(require("history").createHashHistory);
```

配置路由`<Route path="/wechat" exact component={Wechat} />`当匹配到`/wechat`加载`Wechat`组件

```js
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Wechat from './routes/Wechat/Wechat'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/wechat" exact component={Wechat} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
```