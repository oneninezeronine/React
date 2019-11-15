import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home/Home'
import Mine from './pages/Mine/Mine'
import Detail from './pages/Detail/Detail'

import Childa from './pages/Home/Childa/Childa'
import Childb from './pages/Home/Childb/Childb'

import Alayout from './layout/Alayout/Alayout'

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
        <Alayout/>
    </R>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
