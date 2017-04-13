import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import axios from 'axios'

import store from './store'
import App from './components/App'
import Campuses from './components/Campuses'
import Students from './components/Students'

import CampusesContainer from './containers/CampusesContainer'
import StudentsContainer from './containers/StudentsContainer'

import { receiveCampuses } from './action-creators/campuses';
import { receiveStudents } from './action-creators/students';

const onAppEnter = () => {

  const pCampuses = axios.get('/api/campuses');
  const pStudents = axios.get('/api/students');


  return Promise
    .all([pCampuses, pStudents])
    .then(responses => responses.map(r => r.data))
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveStudents(students));
      
    });
};

export default function AppRoot() {
    return (
        <Provider store={store}>
            <Router history={hashHistory} >
                <Route path='/' component={App} onEnter={onAppEnter} >
                    <Route path='/campuses' component={CampusesContainer}/>
                    <Route path='/students' component={StudentsContainer}/>
                <IndexRedirect to="/campuses"/>
                </Route>
            </ Router>
        </Provider>
    )
}
