var React = require('react');
var Profile = require('../components/Profile');
var SlideMenu = require('../components/SlideMenu');
var ReactCSS = require('reactcss');

var Home = React.createClass({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                menuHiddenTrue: {
                    position: 'fixed',
                    width:'250px',
                    transition:'right .5s',
                    top: '90',
                    right: '-250'

                },
                menuHiddenFalse: {
                    position: 'fixed',
                    width:'250px',
                    transition:'right 0.5s',
                    top: '90',
                    right: '0'
                },
                bodyHiddenTrue:{
                    width:'100%',
                    marginLeft:'-250px',
                    transition:'margin-left .5s'
                },
                bodyHiddenFalse:{
                    width:'100%',
                    marginLeft:'0px',
                    transition:'margin-left .5s'
                }

            }
        }
    },
    // This is necessary to make all the classes auto-activate
    styles: function () {
        return this.css()
    },

    getInitialState: function()
    {
        return ({
            mHidden: true
        });
    },

    onUpdate: function(){
        if (this.state.mHidden)
            this.setState({mHidden: false});
        else
            this.setState({mHidden: true}); 
    },

    render: function () {
        return(
            <div>
                <Body id="body" onUpdate={this.onUpdate} style={this.state.mHidden ? this.styles().bodyHiddenFalse : this.styles().bodyHiddenTrue}/>
                <SlideMenu id="slideMenu" style={this.state.mHidden ? this.styles().menuHiddenTrue : this.styles().menuHiddenFalse}/>
            </div>
        )
    }
});


var Body = React.createClass({


    onUpdate: function(){
        this.props.onUpdate();
    },

    render: function(){
        return(
            <div style={this.props.style}>
                
                <Header text="All Employees" onUpdate={this.onUpdate} />
                <Profile />
            </div>
        )
    }
});

var Header = React.createClass({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                labelButtonStyle: {
                    float: 'right',
                    paddingTop:'10px'
                },
                h1Style: {
                    display: 'inline'
                },
                headerStyle:{
                    padding: '10px',
                    position: 'fixed',
                    width: '95%',
                    height: '60px',
                    background: 'white',
                    textAlign:'center'
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },

    render: function(){
        return(
            <div style={this.styles().headerStyle}>
                <h1 className="title" style={this.styles().h1Style}>{this.props.text}</h1>
                <label for="menuToggle" className="menu-icon"  onClick={this.update} style={this.styles().labelButtonStyle}>&#9776; </label>

            </div>
        )
    },

    update: function()
    {
        this.props.onUpdate();
    }

});

module.exports = Home;