/**
 * Created by jose.bustamante on 3/25/2016.
 */
'use strict';

var React = require('react');
var Menu = require('../components/Menu');
var MenuItem = require('../components/MenuItem');
var ReactCSS = require('reactcss');


var SidePanel = React.createClass ({
    

    render() {
        return(
            <div style={this.props.style}>
                <Menu alignment="right"/>
                    
            </div>
        );
        //
    }
});

module.exports = SidePanel;