/*global require module*/
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile= require('../components/Profile');

var EmployeeDetail = require('../components/EmployeeDetail');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var browserHistory = Router.browserHistory;

module.exports = (
    <Route history={browserHistory} path="/" component={Main} location="history">
        <Route path="profile/:id" component={Profile} />
        <Route path="EmployeeDetail/:id" component={EmployeeDetail} />
        <IndexRoute component={Home} />
    </Route>
);
