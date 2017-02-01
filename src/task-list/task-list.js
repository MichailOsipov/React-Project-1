import React from 'react';
import ReactDOM from 'react-dom';
import Task from 'task';

export default class TaskList extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		const tasks = this.props.tasks;
		const filteredTasks = tasks.filter((task)=>{
			if(this.props.filter == "All") return true;			
			if(this.props.filter == "Active" && task.status == "Active") return true;
			if(this.props.filter == "Complete" && task.status == "Complete") return true;
			
			return false;
		});
		const taskItems = filteredTasks.map((task)=>
			<Task key={task.id} reactId={task.id} text={task.text} status={task.status} setStatus={this.props.setStatus} deleteTask={this.props.deleteTask}/>
		);
		return (
			<div className="task-list">{taskItems}</div>			
		);
	}
}