var React = require('react');
var Profile = require('../components/Profile')

var  EmployeeDetail = React.createClass({
    render: function(){
        return(
            <div>
                <Detail />
            <li className="table-view-cell media">
                <a href={"Employees/" + this.props.employee.name}>
                    <img src={this.props.employee.img} />
                    <h4>{this.props.employee.first_name} {this.props.employee. last_name}</h4>
                    <p> {this.props.employee.head_of_department}</p>
                </a>
            </li>
                </div>

        );
    }
});

var Detail = React.createClass({
    render: function(){
        return(
            <h1>{this.props.name}</h1>
        )
    }
});
module.exports = EmployeeDetail;
