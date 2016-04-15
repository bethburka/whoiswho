/*global require module*/

var React = require('react');
var ReactCSS = require('reactcss');

var  EmployeeDetail = React.createClass({
    mixins: [ReactCSS.mixin],
    propTypes: {
        img: React.PropTypes.string,
        first_name: React.PropTypes.string,
        last_name: React.PropTypes.string,
        title: React.PropTypes.string,
        office: React.PropTypes.string,
        profile: React.PropTypes.string
    },
    classes: function() {
        return {
            'default': {
                arrowSpamStyle:{
                  paddingTop:'20px',
                    position:'fixed'
                },
                divMainStyle: {
                    paddingBottom: '10px',
                    paddingTop:'60px'
                },
                imgStyle:{
                    width:'100%',
                    height:'100%'

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
                    <span className="glyphicon glyphicon-menu-left" style={this.styles().arrowSpamStyle}></span>
                </a>
                <div style={this.styles().divMainStyle} className="list-unstyled" >
                    <div style={this.styles().imgStyle}>
                        <img style ={this.styles().imgEleStyle}  src={this.props.img} />
                    </div>
                    <h4>{this.props.first_name} {this.props.last_name}</h4>
                    <h5>  {this.props.title}</h5> <br />
                    <h4> Office: {this.props.office}</h4> <br />
                    <h4> Profile: {this.props.profile}</h4>

                </div>
            </div>

        );
    }
});


EmployeeDetail.defaultProps ={id: 1,title:"web Developer", department:"front end Developer" , first_name: "Ron", last_name: "Vrijmoet",img: "test.jpg", office:"amsterdam", profile:"Hi, I am a Front-End Developer"}

module.exports = EmployeeDetail;



