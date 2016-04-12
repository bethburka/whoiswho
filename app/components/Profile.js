/*global document require module*/
/**
 * Created by bethelehem.burka on 19/02/16.
 */
'use strict';

var React = require('react');
var SortList = require('../components/SortList');
var ReactCSS = require('reactcss');

var SearchBar = React.createClass({
    mixins: [ReactCSS.mixin],
    propTypes: {
        names: React.PropTypes.object,
        onUpdate: React.PropTypes.func
    },
    classes: function() {
        return {
            'default': {
                searchBarStyle: {
                    position: 'fixed',
                    background: 'white',
                    width: '95%',
                    borderRadius:'15px'

                }
            }
        }
    },

    styles: function () {
        return this.css()
    },

    searchHandler: function(event){
        var searchKey = event.target.value;
        searchKey = searchKey.toLowerCase();
        var arrayMatches = [];
        var patt = new RegExp(searchKey);
        this.props.names.forEach(function (employee) {

            var fullName = employee.first_name.toLowerCase() + " " + employee.last_name.toLowerCase();
            if(patt.test(fullName)){
                arrayMatches.push(employee);
            }
        });
        this.props.onUpdate(arrayMatches);
    },



    render: function(){
        return (
                <div style={this.styles().searchBarStyle}>
                    <input type="text" placeholder="Search"  onChange={this.searchHandler}/>
                </div>

        )
    }
});


var EmployeeListItem = React.createClass({
    mixins: [ReactCSS.mixin],
    propTypes: {
        employee: React.PropTypes.object
    },
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
    propTypes: {
        onClick: React.PropTypes.func,
        names: React.PropTypes.object
    },
    classes: function() {
        return {
            'default': {
                ulStyle: {
                    padding :'0px',
                    listStyleType: 'none',
                    float:'left'
                },
                divEmployeeListStyle:{
                    overflow: 'hidden',
                    paddingTop:'35px',
                    width: '95%',
                    display: 'inline-block'
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

        return(
            <div id="list" style={this.styles().divEmployeeListStyle}>
            <ul style={this.styles().ulStyle}>
                {arrayLi}
            </ul>
                </div>

        );
    }
});

var Profile= React.createClass({
    mixins: [ReactCSS.mixin],

    classes: function() {
        return {
            'default': {
                profileStyle: {
                    paddingTop: '60px'
                }
            }
        }
    },

    styles: function () {
        return this.css()
    },

    onUpdate:function (arrayMatches) {
        this.setState({arrayEmployee:arrayMatches});
    },

    getInitialState: function()
    {
        return ({
            arrayEmployee: [
                //this array has to be order by first_name before to use it.
                {id: 1, head_of_department: "", first_name: "Non", last_name: "Vrijmoet"},
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
        });
    },


    render:function(){

        var Employees =[
                //this array has to be order by first_name before to use it.
            {id: 1, head_of_department: "", first_name: "Non", last_name: "Vrijmoet"},
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

            <div style={this.styles().profileStyle}>
                <SearchBar names={Employees} onUpdate={this.onUpdate}/>
                <EmployeeList names={this.state.arrayEmployee} />
                <SortList/>


            </div>
        );
    }
});

var LetterItem = React.createClass({
    mixins: [ReactCSS.mixin],
    propTypes: {
        letter: React.PropTypes.string
    },
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