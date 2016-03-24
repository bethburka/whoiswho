var React = require('react');
var Profile = require('../components/Profile')
var Home = React.createClass({
    render: function(){
        return(
            <div>
            <Header className="brnad" text="All Employees" />

            <Profile />
                </div>
        )
    }
});

var Header = React.createClass({
    render: function(){
        return(
            <div>
                <input type="checkbox" id="menuToggle"/>
                    <label for="menuToggle" className="menu-icon">&#9776;</label>


            <h1 className="title">{this.props.text}</h1>

                <nav className="menu">
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


module.exports = Home;