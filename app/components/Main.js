/**
 * Created by bethelehem.burka on 19/02/16.
 */
var React = require('react');

var Main = React.createClass({
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