import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Wechat from './routes/Wechat/Wechat'
import Contact from './routes/Contact/Contact'
function RouterConfig({ history }) {
  return (
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
  );
}

export default RouterConfig;
