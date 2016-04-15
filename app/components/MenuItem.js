/**
 * Created by jose.bustamante on 3/25/2016.
 */

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var ReactCSS =require('reactcss');





var MenuItem = React.createClass({

    mixins: [ReactCSS.mixin],
    propTypes: {
        children: React.PropTypes.object,
        text:  React.PropTypes.string
    },
    classes: function() {
        return {
            'default': {
                menuStyle: {
                    paddingRight:'10em'
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },
    getInitialState: function () {
        return {hover: false};
    },

    mouseOver: function (e,a) {
        document.getElementById(a.target.id).style.background="black" ;

    },

    mouseOut: function (e,evt) {
        document.getElementById(evt.target.id).style.background="white" ;
    },

    render: function() {


        var label = {
            color:'#000',
            textDecoration: 'none',
            display: 'block',
            borderBottom: '1px solid #000',
            transition: 'background-color 0.9s ease',
            backgroundColor: 'white',
            color:'#a9a9aa',
            fontFamily:'century Gothic',
            fontSize:'1.3em',
            paddingTop: '3em',
            paddingLeft:'20em'

        };
        if (this.state.hover) {
            label = {
                fontFamily:'century Gothic',
                fontSize:'1.3em',
                transition: 'background-color 0.9s ease',
                backgroundColor: 'black',
                color:'white',
                paddingTop: '3em',
                paddingLeft:'20em'
            };
        }
        return (
            <div>

                <nav className="menu">
                    <li id="all_employees" style={label} onMouseOver={this.mouseOver.bind(this, "all_employees")} onMouseOut={this.mouseOut.bind(this, "all_employees")}>ALL EMPLYEEES</li>
                    <li id="departments"  style={label} onMouseOver={this.mouseOver.bind(this, "departments")} onMouseOut={this.mouseOut.bind(this, "departments")}>DEPARTMENTS</li>
                    <li id="calender" style={label} onMouseOver={this.mouseOver.bind(this, "calender")} onMouseOut={this.mouseOut.bind(this, "calender")}>CALENDER</li>
                    <li id="whoiswho" style={label} onMouseOver={this.mouseOver.bind(this, "whoiswho")} onMouseOut={this.mouseOut.bind(this, "whoiswho")}>WHO'S NEW</li>
                    <li id="setting" style={label} onMouseOver={this.mouseOver.bind(this, "setting")} onMouseOut={this.mouseOut.bind(this, "setting")}>SETTINGS</li>



                </nav></div>
        );
    }
});


module.exports = MenuItem;