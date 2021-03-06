import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import{Router, Route, browserHistory} from 'react-router';
import Profile from  './containers/profile';
import Resources from './components/resources';
import requireAuth from './components/require_authentication';
import Archive from './containers/archive';
import Form from './components/form';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path ="/resources" component={requireAuth(Resources)}/>
            <Route path ="/archive/*" component={Archive}/>
            <Route path ="/profile/*" component={Profile}/>
            <Route path ="/login" component={Form}/>
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
