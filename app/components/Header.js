/*global document require window module*/

/**
 * Created by jose.bustamante on 4/14/2016.
 */
var React = require('react');
var ReactCSS = require('reactcss');


var Header = React.createClass({
    mixins: [ReactCSS.mixin],
    propTypes: {
        text: React.PropTypes.string,
        onUpdate: React.PropTypes.func
    },
    classes: function() {
        return {
            'default': {
                labelButtonStyle: {
                    float: 'right',
                    paddingTop:'10px'
                },
                h1Style: {
                    display: 'inline',
                    fontFamily:'cursive'
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

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.updateDimensions);
    },


    render: function(){
        return(
            <div style={this.styles().headerStyle}>
                <h1 className="title" style={this.styles().h1Style}>{this.props.text}</h1>
                <label htmlFor="menuToggle" className="menu-icon"  onClick={this.update} style={this.styles().labelButtonStyle}>&#9776; </label>
            </div>
        )
    },

    update: function()
    {
        this.props.onUpdate();
    }

});

module.exports = Header;