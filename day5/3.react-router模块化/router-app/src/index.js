import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home/Home'
import Mine from './pages/Mine/Mine'
import Detail from './pages/Detail/Detail'

import Childa from './pages/Home/Childa/Childa'
import Childb from './pages/Home/Childb/Childb'

import {
    HashRouter as R,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

const router = [
    {
        path: '/home',
        component: <Home />,
        children: [{
            path: '/home/a',
            component: <Childa />
        }, {
            path: '/home/b',
            component: <Childb />
        }]
    },
    {
        path: '/mine',
        component: <Mine />
    },
    {
        path: '/detail',
        component: <Detail />
    }
]

ReactDOM.render(
    <R>
        <Link to="/home">首页</Link> | <Link to="/mine">我的</Link> | <Link to="/detail">详情页</Link>
        {(() => {
            if (window.sessionStorage.getItem('login')*1) {
                return <><Switch>{router.map((item, index) => {
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
                })}</Switch><Redirect to="/home" /></>
            } else {
                // 路由重定向
                return <div>返回登录页面</div>
            }
        })()}
    </R>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
