/**
 * Created by jose.bustamante on 3/25/2016.
 */
'use strict';

var React = require('react');
var Menu = require('../components/Menu');
var MenuItem = require('../components/MenuItem');
var ReactCSS = require('reactcss');


var SidePanel = React.createClass ({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                menuHiddenTrue: {
                    left:'-250px',
                    position:'absolute',
                    transition:'all 0.5s ease'
                },
                menuHiddenFalse: {
                    left:'0px',
                    position:'absolute',
                    width: '250px',
                    background:'#273D7A',
                    transition:'left 0.5s ease'
                },
                Content: {
                    type: 'modal-content',
                    padding: '20px'
                }
            }
        }
    },

    // This is necessary to make all the classes auto-activate
    styles: function () {
        return this.css()
    },

    getInitialState: function() {
        return {menuHidden: this.props.mHidden};
    },

    componentWillReceiveProps: function () {
        this.toggleMenu();
    },

    toggleMenu: function() {
        console.log('buttom clicked');
        if (this.state.menuHidden)
            this.setState({menuHidden: false});
        else
            this.setState({menuHidden: true});
    },

    render() {
        return(
            <div>
                <Menu alignment="left" style={this.state.menuHidden ? this.styles().menuHiddenTrue : this.styles().menuHiddenFalse} />
                    
            </div>
        );
        //
    }
});

module.exports = SidePanel;