/**
 * Created by jose.bustamante on 3/25/2016.
 */

var React = require('react');
var browserHistory = require('react-router').browserHistory;

var MenuItem = React.createClass({
    navigate: function(push) {
        browserHistory.push(push);
    },

    render: function() {
        return (
            <div>
                <div className="menu-item" onClick={this.navigate.bind(this, this.props.push)}>{this.props.children}</div>

                <h1 className="title">{this.props.text}</h1>

                <nav className="menuNav">
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