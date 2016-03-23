/**
 * Created by bethelehem.burka on 19/02/16.
 */
var React = require('react');
var Router = require('react-router');

var SearchBar = React.createClass({
    render: function(){
        return (
            <div className="bar bar-standard navbar-header-secondary">
                <input type="search" />
            </div>
        )
    }
});


var EmployeeListItem = React.createClass({
    render:function(){
        return(

            <li className="table-view-cell media">
                <a href={"Employees/" + this.props.employee.id}>
                    <img src="#"/> </a>

                <a href={"Employees/" + this.props.employee.id}>
                    <h4>{this.props.employee.first_name} {this.props.employee.last_name}</h4></a>
                <a href={"Employees/" + this.props.employee.id}>
                    <p> {this.props.employee.head_of_department}</p></a>

            </li>
        );

    }
});
var EmployeeList = React.createClass({
    render: function(){
        var onClickfunc = this.props.onClick;
        var items = this.props.names.map(function(employee) {
            return(
                <EmployeeListItem key={employee.id} onClick={onClickfunc} employee={employee} />
            );
        });
        return(
            <ul >
                {items}
            </ul>

        );
    }
});

var Profile= React.createClass({
    render:function(){

        var Employees =[

            {id: 1, head_of_department: 1, first_name: "Ron", last_name: "Vrijmoet",img: "test.jpg"},
            {id: 2, head_of_department: 0, first_name: "Richard", last_name: "Olyerhoek"},
            {id: 3, head_of_department: 1, first_name: "Nick ", last_name: "Mueller"},
            {id: 100, head_of_department: 0, first_name: "Silviu", last_name: "Agapi"}
        ]

        return(
            <div className="container">
                <SearchBar />
                <EmployeeList names={Employees} />


            </div>
        );
    }
});

module.exports = Profile;