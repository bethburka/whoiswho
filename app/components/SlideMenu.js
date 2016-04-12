/*global require module*/
/**
 * Created by jose.bustamante on 3/25/2016.
 */
'use strict';

var React = require('react');
var Menu = require('../components/Menu');

var SidePanel = React.createClass ({
    render: function() {
        return(
            <div style={this.props.style}>
                <Menu alignment="right"/>
            </div>
        );
        //
    }
});

module.exports = SidePanel;