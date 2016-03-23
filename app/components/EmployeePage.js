/**
 * Created by bethelehem.burka on 26/02/16.
 */
var React = require('react');



var EmployeePage = React.createClass({

    componentDidMount:function(){
        this.props.names.findById(this.props.employee.id).handleClick(function(id)
        {
            this.setState({employee:id});
        }.bind(this));
    },

    render(){
        <div>
            <ul>
                <li> <img className="" src={}/></li>
                <li> <h4>{this.state.employee.first_name}{this.state.employee.last_name}</h4></li>
                <li>  <p>{this.state.employee.head_of_department}</p></li>
            </ul>
        </div>


    }
});

module.exports = EmployeePage;
