var React = require('react');
var Profile = require('../components/Profile');
var SlideMenu = require('../components/SlideMenu');

var Home = React.createClass({

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
        console.log('onUpdate done');
        console.log(this.state.mHidden);
    },

    render: function(){
        return(
            <div>
                <Header className="brnad" text="All Employees" onUpdate={this.onUpdate} />
                <SlideMenu  mHidden={this.state.mHidden}/>
                <Profile />
            </div>
        )
    }
});

var Header = React.createClass({

    render: function(){
        return(
            <div>
                <div>
                    <label for="menuToggle" className="menu-icon"  onClick={this.update}>&#9776; </label>
                </div>
                <h1 className="title">{this.props.text}</h1>
            </div>
        )
    },

    update: function()
    {
        console.log('handler');
        this.props.onUpdate();
    }

});

module.exports = Home;