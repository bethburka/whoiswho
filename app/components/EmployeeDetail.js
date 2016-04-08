var React = require('react');
var Router = require('react-router');
var ReactCSS = require('reactcss');

var  EmployeeDetail = React.createClass({

    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                liStyle: {
                    paddingBottom: '10px',
                },
                imgStyle:{
                    width:'100%',
                    height:'100%',
                },
                imgEleStyle:{
                    paddingTop:'3em',
                    width:'100%',
                    height:'500px'
                },
                headerStyle:{
                    align:'center'
                }

            }
        }
    },




    styles: function () {
        return this.css()
    },
    render: function(){

        return(
            <div>
                <a href="#">
                    <span className="glyphicon glyphicon-menu-left"></span>
                </a>
                <h2 style={this.styles().headerStyle}>Profile</h2>

                <li style={this.styles().liStyle} className="list-unstyled" >
                    <div style={this.styles().imgStyle}>
                        <img style ={this.styles().imgEleStyle}  src={this.props.img} />
                    </div>
                    <h4>{this.props.first_name} {this.props.last_name}</h4>
                    <h5>  {this.props.title}</h5> <br />
                    <h4> Office: {this.props.office}</h4> <br />
                    <h4> Profile: {this.props.profile}</h4>

                </li>
            </div>

        );
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
            </div>
        )
    },

    update: function()
    {
        this.props.onUpdate();
    }

});


EmployeeDetail.defaultProps ={id: 1,title:"web Developer", department:"front end Developer" , first_name: "Ron", last_name: "Vrijmoet",img: "test.jpg", office:"amsterdam", profile:"Hi, I am a Front-End Developer"}

module.exports = EmployeeDetail;



