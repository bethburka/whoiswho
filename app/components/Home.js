/*global document require window module*/
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
                    width:'95%',
                    transition:'right .5s',
                    top: '90',
                    right: '-95%'
                },
                menuHiddenFalse: {
                    position: 'fixed',
                    width:'95%',
                    transition:'right 0.5s',
                    top: '90',
                    right: this.state.menuRightWidth//I need the -5% of home width
                },
                bodyHiddenTrue:{
                    width:'100%',
                    height: '100%',
                    marginLeft:'-95%',
                    transition:'margin-left .5s',
                    overflow: 'hidden'
                },
                bodyHiddenFalse:{
                    width:'100%',
                    height: '100%',
                    marginLeft:'0px',
                    transition:'margin-left .5s',
                    overflow: 'hidden'

                },
                homeStyle:{
                    width:'100%',
                    height:'100%',
                    overflow: 'hidden'
                }

            }
        }
    },
    // This is necessary to make all the classes auto-activate
    styles: function () {
        return this.css()
    },

    updateMenuRightPos: function () {
      var container = document.getElementById("container");
        var style = container.currentStyle || window.getComputedStyle(container);
        var margin = parseInt(style.marginLeft.substring(0,style.marginLeft.length -2));
        var padding = parseInt(style.paddingLeft.substring(0,style.paddingLeft.length -2));
        var width = container.offsetWidth;
        var size = (margin + padding + (width*0.05))*-1;
      this.setState({menuRightWidth: size});

    },

    componentDidMount: function() {
        window.addEventListener('resize', this.updateMenuRightPos);
        this.updateMenuRightPos();
    },

    getInitialState: function()
    {
        return ({
            mHidden: true,
            menuRightWidth: 0
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
            <div id="home" style={this.styles().homeStyle}>
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
            <div id="body" style={this.props.style}>
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
                    width: this.state.width,
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

    getInitialState: function() {
        return {width: 0};
    },

    updateDimensions: function() {
        var prueba = document.getElementById("body").offsetWidth;
        this.setState({width: prueba});



    },
    componentDidMount: function() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
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