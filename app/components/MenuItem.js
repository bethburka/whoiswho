/**
 * Created by jose.bustamante on 3/25/2016.
 */

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var ReactCSS =require('reactcss');

var MenuItem = React.createClass({

    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                menuStyle: {
                    paddingRight:'10em'
                },

              }
        }
    },

    styles: function () {
        return this.css()
    },



  render: function() {


        return (
            <div>
                <div  style={this.styles().menuStyle}>{this.props.children}</div>

                <h1 className="title">{this.props.text}</h1>

                <nav className="menu" style={this.styles().menuStyle}>
                    <ul>
                        <li><a href="#">ALL EMPLOYEES</a></li>
                        <li><a href="#">DEPARTMENTS</a></li>
                        <li><a href="#">CALENDER</a></li>
                        <li><a href="#">WHO'S NEW</a></li>
                        <li><a href="#">SETTINGS</a></li>
                    </ul>
                </nav>
            </div>

        )
    }
});



module.exports = MenuItem;