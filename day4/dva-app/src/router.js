import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Wechat from './routes/Wechat/Wechat'
import Contact from './routes/Contact/Contact'
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

export default RouterConfig;
