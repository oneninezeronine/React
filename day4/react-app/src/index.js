import React from 'react';
import ReactDOM from 'react-dom';

// 全局样式
import 'weui'
import './index.css';


// 根组件
import App from './components/App/App';
// sw服务，用于webapp开发
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
