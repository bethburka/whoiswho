/*global require module*/
var React = require('react');

var Main = React.createClass({
    propTypes: {
      children: React.PropTypes.object
    },
    render: function(){
        return (
            <div className="main-container">

                <div id="container" className="container">
                    {this.props.children}
                    </div>
            </div>
        )
    }
});

module.exports = Main;