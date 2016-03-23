var React = require('react');
var Profile = require('../components/Profile')
var Home = React.createClass({
    render: function(){
        return(
            <div>
            <Header className="bar bar-nav" text="All Emplyees" />
                <a href="#" className="icon icon-left-nav pull-left">this</a>
            <Profile />
                </div>
        )
    }
});

var Header = React.createClass({
    render: function(){
        return(
            <h1 className="title">{this.props.text}</h1>
        )
    }
});


module.exports = Home;