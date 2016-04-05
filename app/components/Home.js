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
                    right:'-250px',
                    transition:'.margin-right .5s',
                    width: '250px'
                },
                menuHiddenFalse: {
                    right:'0px',
                    width: '250px',
                    height: '100%' ,
                    transition:'right 0.3s ease'
                },
                bodyHiddenTrue:{
                    marginLeft:'-250px',
                    transition:'margin-left .5s'
                },
                bodyHiddenFalse:{
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
                  float:'right',
                    top: '5%',
                    paddingLeft :'15px',
                    paddingRight: '10px',
                    right: '15px'
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },

    render: function(){
        return(
            <div>
                <h1 className="title">{this.props.text}</h1>
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