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