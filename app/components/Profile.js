/*global document require module*/

'use strict';

var React = require('react');
var SortList = require('../components/SortList');
var ReactCSS = require('reactcss');

var SearchBar = React.createClass({
    mixins: [ReactCSS.mixin],
    propTypes: {
        names: React.PropTypes.array,
        onUpdate: React.PropTypes.func
    },
    classes: function() {
        return {
            'default': {
                searchBarDivStyle: {
                    position: 'fixed',
                    background: 'white',
                    width: '95%',
                    paddingBottom:'20px',
                },
                searchBarStyle: {
                    borderRadius:'5px',
                    background:'#e5e5e5',
                    border:'1px solid #e5e5e5'
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
                <div style={this.styles().searchBarDivStyle}>
                    <input type="text" placeholder="Search"  onChange={this.searchHandler} style={this.styles().searchBarStyle}/>
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
        names: React.PropTypes.array,
        letter: React.PropTypes.string
    },
    classes: function() {
        return {
            'default': {
                ulStyle: {
                    padding :'0px',
                    listStyleType: 'none',
                    float:'left',
                    paddingTop:'30px'
                },
                divEmployeeListStyle:{
                    overflow: 'hidden',
                    paddingTop:'26px',
                    width: '95%',
                    display: 'inline-block'
                },
                divOpacityStyle:{
                    height:'25px',
                    width: '100%',
                    background:'rgba(255,255,255,0.7)',
                    position:'fixed',
                    paddingTop:'10px'
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
                arrayLi.push(<LetterItem key={currentLetter} letter={currentLetter}/>);
                arrayLi.push(<EmployeeListItem key={employee.id} onClick={onClickfunc} employee={employee} />);
            }else{
                arrayLi.push(<EmployeeListItem key={employee.id} onClick={onClickfunc} employee={employee} />);
            }
        });
        

        return(
            <div id="list" style={this.styles().divEmployeeListStyle}>
                <div style={this.styles().divOpacityStyle}>{this.props.letter}</div>
                <ul style={this.styles().ulStyle}>
                    {arrayLi}
                </ul>
            </div>

        );
    }
});

var Profile= React.createClass({
    mixins: [ReactCSS.mixin],
    propTypes: {
        names: React.PropTypes.array
    },
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

    updateListHead: function () {
        var sectionHeads = document.getElementsByClassName("sectionhead");
        var lastLetter ="";
        for (var i = 0 ; i < sectionHeads.length; i++) {
            if(sectionHeads[i].getBoundingClientRect().top < 100){
                lastLetter = sectionHeads[i].id;
            }
        }
        this.setState({letter: lastLetter});

    },

    componentDidMount: function () {
        window.addEventListener('scroll', this.throttle);  //this.throttle(this.updateListHead, 100), true
        this.updateListHead();
    },

    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.throttle);

    },


    throttle: function() {
        var wait = false;
        var limit = 50;
        return function () {
            if (!wait) {
                this.updateListHead;
                wait = true;
                setTimeout(function () {
                    wait = false;
                }, limit);
            }
        }
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
            ],
            letter:'A'
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
                <EmployeeList names={this.state.arrayEmployee} letter={this.state.letter}/>
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
            <li id={this.props.letter} style={this.styles().liStyle} className="sectionhead">{this.props.letter}</li>
        );
    }
});

module.exports = Profile;