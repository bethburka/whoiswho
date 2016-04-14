/*global require module*/

import React from 'react';
import {ReactDOM, render} from 'react-dom';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import EmployeeDetail from '../components/EmployeeDetail';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import { hashHistory } from 'react-router'

module.exports = (
    <Router history={browserHistory}>
        <Route  path="/" component={Main}>
            <Route path="profile/:id" component={Profile} />
            <Route path="EmployeeDetail/:id" component={EmployeeDetail} />
            <IndexRoute component={Home} />
        </Route>
    </Router>
);
