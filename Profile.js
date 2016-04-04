/**
 * Created by bethelehem.burka on 19/02/16.
 */
var React = require('react');
var Router = require('react-router');




var SearchBar = React.createClass({
    getIntialState : function () {
        return {searchKey: ""};
    },

    searchHandler: function(event){
        var searchKey = event.target.value;
        this.setState({searchKey: searchKey});
        this.props.searchHandler(searchKey);
    },
    render: function(){
        return (
            <form id="search-form" className="form-in">
            <div className="input-group">
                <input type="search" className ="search-form" placeholder="Search" onChange={this.searchHandler} value={this.state.symbol} />
              </div>
                </form>
        )
    }
});


var EmployeeListItem = React.createClass({
    render:function(){
        return(

            <li className="list-unstyled">
                <a href={document.URL + "/EmployeeDetail/" + this.props.employee.id}>
                    <img src="" width="70" height="70"/> </a>
                <a href={document.URL + "/EmployeeDetail/" + this.props.employee.id}>
                    <strong>{this.props.employee.first_name} {this.props.employee.last_name}</strong></a>
                <a href={document.URL + "/EmployeeDetail/" + this.props.employee.id}>
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
            <div id="list">
            <ul>
                {items}
            </ul>
                </div>

        );
    }
});

var Profile= React.createClass({
    searchHandler:function(key){
        console.log( key)},

    searchResult: function(key, employee){
        employee.forEach(function (e){
            if (key==first_name){
                return employee;

            }
            if (key==lastname){
                return employee;
            }

        })






    },
    render:function(){

        var Employees =[

            {id: 1, head_of_department: "", first_name: "Ron", last_name: "Vrijmoet"     },
            {id: 2, head_of_department: "", first_name: "Richard", last_name: "Olyerhoek"},
            {id: 3, head_of_department: "", first_name: "Nick ", last_name: "Mueller"},
            {id: 100, head_of_department: "", first_name: "Silviu", last_name: "Agapi"}
        ]

        return(
            <div className="container">
                <menu />
                <SearchBar searchHandler={this.searchHandler} />
                <h4>A</h4>
                <EmployeeList names={Employees} />


            </div>
        );
    }
});

module.exports = Profile;