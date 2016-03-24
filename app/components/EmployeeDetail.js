var React = require('react');
var Router = require('react-router');


var  EmployeeDetail = React.createClass({
    render: function(){

        return(
            <div>
                <Detail />
                <li className="table-view-cell media">
                    <a href={"Employees/" + this.props.first_name}>
                        <img src={this.props.img} />
                        <h4>{this.props.first_name} {this.props.last_name}</h4>
                        <p> ID: {this.props.params.id}</p>

                    </a>
                </li>
            </div>

        );
    }
});

var Detail = React.createClass({
    render: function(){
        return(
            <h1>{this.props.first_name}</h1>
        )
    }
});

EmployeeDetail.defaultProps ={id: 1, head_of_department: 1, first_name: "Ron", last_name: "Vrijmoet",img: "test.jpg"}

module.exports = EmployeeDetail;


