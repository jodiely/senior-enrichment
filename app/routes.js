import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import axios from 'axios'

import store from './store'
import App from './components/App'
import Campuses from './components/Campuses'
import Students from './components/Students'

import { receiveCampuses} from './action-creators/campuses';

const onAppEnter = () => {

  const pCampuses = axios.get('/api/campuses');


  return Promise
    .all([pCampuses])
    .then(responses => responses.map(r => r.data))
    .then(([campuses]) => {
      store.dispatch(receiveCampuses(campuses));
      
    });
};

export default function AppRoot() {
    return (
        <Provider store={store}>
            <Router history={hashHistory} >
                <Route path='/' component={App} onEnter={onAppEnter} >
                    <Route path='/campuses' component={Campuses}/>
                {/*<Route path='/students' component={Students}/>*/}
                <IndexRedirect to="/campuses"/>
                </Route>
            </ Router>
        </Provider>
    )
}
