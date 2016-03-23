/**
 * Created by bethelehem.burka on 19/02/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
)