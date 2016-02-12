/**
 * Created by bethelehem.burka on 10/02/16.
 */

var React = require('react'),
    ReactDOM = require('react-dom'),

    Route = require('react-router');

/** mountNode = document.getElementById("app"),
 {Router,Route,Link}  = require('react-router');*/
var routes =[
    <Route name="name" path="/name" handler={require('components/profilepage')} />
];



var EmployeeTable = React.createClass({
    getInitialState: function(){

        return{


            employees:[
                {name:'employee 01', img:'path', dep:'department 01'},
                {name:'employee 02', img:'path', dep:'department 01' },
                {name:'employee 03', img:'path', dep:'department 01'},
                {name:'employee 04', img:'path', dep:'department 01'},
            ],

        }
    },
    render:function(){
        return(
            <div className="container">
            <div className = "row-spacer">
            <ShowList names={this.state.employees} />
        </div>
        </div>
        )}
});

var ShowList = React.createClass({
    myfunction: function() {

        onClick = context.router.transitionTo("name");
    },
    render:function(){
        var listItems = this.props.names.map(function(employee) {
            return (
                <li employee={employee}>

                <Link to={onClick().context.router.transitionTo("name")}  ><img src="{employee.img}" width="50" height="50"/>{employee.name},<br /> {employee.dep}</Link>
            </li>)


        });

        return(
            <div >
            <h1>All Emplooyees</h1>
        <ul className ="list-unstyled">
            {listItems}
            </ul>
            </div>
        )

    }
});

ReactDOM.render(<EmployeeTable /> ,document.getElementById('app'));

