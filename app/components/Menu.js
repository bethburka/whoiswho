/**
 * Created by jose.bustamante on 3/25/2016.
 */
'use strict';

var React = require('react');
var MenuItem = require('../components/MenuItem')

var Menu = React.createClass({

    render: function(){
        return <div style={this.props.style}>
            <div>
                Menu content
                <MenuItem push="/firstpage">menuItem</MenuItem>
            </div>
        </div>;
    }
});

module.exports = Menu;