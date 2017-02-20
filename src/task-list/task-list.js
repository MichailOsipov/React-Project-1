import React from 'react';
import ReactDOM from 'react-dom';
import Task from 'task';

export default class TaskList extends React.Component {
	constructor(props){
		super(props);
		this.getVisibleTasks = this.getVisibleTasks.bind(this);
	}
	
	getVisibleTasks () {
		switch(this.props.filter) {
			case 'All':
				return this.props.tasks; //сделай булеву переменную - complete
			case 'Active':
				return this.props.tasks.filter(t => t.status == "Active");
			case 'Complete':
				return this.props.tasks.filter(t => t.status == "Complete");
		}
	}
	render() {
		const filteredTasks = this.getVisibleTasks();
		const taskItems = filteredTasks.map((task)=>
			<Task key={task.id} reactId={task.id} text={task.text} status={task.status} setStatus={this.props.setStatus} deleteTask={this.props.deleteTask}/>
		);
		return (
			<div className="task-list">{taskItems}</div>			
		);
	}
}