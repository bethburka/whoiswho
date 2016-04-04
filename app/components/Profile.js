/**
 * Created by bethelehem.burka on 19/02/16.
 */
var React = require('react');
var SortList = require('../components/SortList');
var Router = require('react-router');
var ReactCSS = require('reactcss');



var SearchBar = React.createClass({
    render: function(){
        return (
            <form id="search-form" className="form-in">
            <div className="input-group">
                <input type="text" className="search-form" placeholder="Search" />
              </div>
                </form>
        )
    }
});


var EmployeeListItem = React.createClass({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                liStyle: {
                    paddingBottom: '10px'
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },

    render:function(){
        return(

            <li className="list-unstyled" style={this.styles().liStyle}>
                <a href={document.URL + "/EmployeeDetail/" + this.props.employee.id}>
                    <img src="" width="70" height="70"/> </a>

                <a href={document.URL + "/EmployeeDetail/" + this.props.employee.id}>
                    <strong>{this.props.employee.first_name} {this.props.employee.last_name}</strong></a>
                <a href={document.URL + "/EmployeeDetail/" + this.props.employee.id}></a>

            </li>
        );

    }
});
var EmployeeList = React.createClass({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                ulStyle: {
                    padding :'0px',
                    paddingTop: '20px',
                    listStyleType: 'none'
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },


    render: function(){
        var onClickfunc = this.props.onClick;
        var currentLetter = 'z';
        var arrayLi = [];

        this.props.names.forEach(function (employee) {
            if(currentLetter != employee.first_name.charAt(0)){
                currentLetter = employee.first_name.charAt(0);
                arrayLi.push(<LetterItem letter={currentLetter}/>);
                arrayLi.push(<EmployeeListItem key={employee.id} onClick={onClickfunc} employee={employee} />);
            }else{
                arrayLi.push(<EmployeeListItem key={employee.id} onClick={onClickfunc} employee={employee} />);
            }
        });

        /*
        var items = this.props.names.map(function(employee) {

            if(currentLetter != employee.first_name.charAt(0)){
                currentLetter = employee.first_name.charAt(0);
                return(
                    <li key={employee.first_name.charAt(0)}>
                        <LetterItem letter={currentLetter}/>
                        <EmployeeListItem key={employee.id} onClick={onClickfunc} employee={employee} />
                    </li>
                )
            }else{
                return(
                    <li>
                        <EmployeeListItem key={employee.id} onClick={onClickfunc} employee={employee} />
                    </li>
                )
            }

        }.bind(this));*/

        return(
            <div id="list">
            <ul style={this.styles().ulStyle}>
                {arrayLi}
            </ul>
                </div>

        );
    }
});

var Profile= React.createClass({
    

    render:function(){

        var Employees =[
                //this array has to be order by first_name before to use it.
            {id: 1, head_of_department: "", first_name: "Non", last_name: "Vrijmoet"     },
            {id: 2, head_of_department: "", first_name: "Richard", last_name: "Olyerhoek"},
            {id: 3, head_of_department: "", first_name: "Rick ", last_name: "Mueller"},
            {id: 4, head_of_department: "", first_name: "Silviu", last_name: "Agapi"},
            {id: 5, head_of_department: "", first_name: "Sick ", last_name: "Mueller"},
            {id: 6, head_of_department: "", first_name: "Silviu", last_name: "Agapi"},
            {id: 7, head_of_department: "", first_name: "Tick ", last_name: "Mueller"},
            {id: 8, head_of_department: "", first_name: "Tilviu", last_name: "Agapi"},
            {id: 9, head_of_department: "", first_name: "Uick ", last_name: "Mueller"},
            {id: 10, head_of_department: "", first_name: "Uilviu", last_name: "Agapi"},
            {id: 11, head_of_department: "", first_name: "Vick ", last_name: "Mueller"},
            {id: 12, head_of_department: "", first_name: "Vilviu", last_name: "Agapi"},
            {id: 13, head_of_department: "", first_name: "Wick ", last_name: "Mueller"},
            {id: 14, head_of_department: "", first_name: "Wilviu", last_name: "Agapi"},
            {id: 15, head_of_department: "", first_name: "Zick ", last_name: "Mueller"},
            {id: 100, head_of_department: "", first_name: "Zilviu", last_name: "Agapi"}
        ]

        return(
            <div className="container">
                <SearchBar />
                <EmployeeList names={Employees} />
                <SortList/>


            </div>
        );
    }
});

var LetterItem = React.createClass({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                liStyle: {
                    paddingBottom: '10px'
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },

    render:function () {
        return(
            <li id={this.props.letter} style={this.styles().liStyle}>{this.props.letter}</li>
        );
    }
});

module.exports = Profile;