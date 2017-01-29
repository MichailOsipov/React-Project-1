import React from 'react';
import ReactDOM from 'react-dom';

import AddTaskForm from './add-task-form.js';
import TaskList from './task-list.js';
import Filter from './filter.js';

export default class ToDoList extends React.Component {
	constructor(props){
		super(props);
		this.addTask = this.addTask.bind(this);
		this.setStatus = this.setStatus.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.setFilter = this.setFilter.bind(this);
		this.state = {tasks: [], uniqueID: 1, filterType: "All"}; //FilterType: All, Complete, Active; Status: Complete, Active
	}
	
	addTask(text){
		let newTask = {
			id: this.state.uniqueID,
			text: text,
			status: "Active"
			};
		var newTasksList = this.state.tasks.slice();
		newTasksList.push(newTask);
		this.setState(prevState => ({
			tasks: newTasksList,
			uniqueID: prevState.uniqueID + 1
		}));
	}
	
	//не знаю куда лучше поместить эти два метода, может быть в TaskList? мне приходится тащить эти методы в TaskList, затем в Task.
	
	//1
	setStatus(id, newStatus){
		let newTasksList = this.state.tasks.slice();
		for(let i=0;i<newTasksList.length;i++){
			if(newTasksList[i].id==id){
				newTasksList[i].status = newStatus;
				break;
			}
		}
		this.setState({
			tasks: newTasksList
		});
	}
	
	//2
	deleteTask(id){
		let newTasksList = this.state.tasks.slice();
		for(let i=0;i<newTasksList.length;i++){
			if(newTasksList[i].id==id){
				newTasksList.splice(i,1);
				break;
			}
		}
		this.setState({
			tasks: newTasksList
		});
	}
	
	setFilter(filterType){
		this.setState({
			filterType: filterType
		});
	}
	
	render() {
		return (
			<div className="to-do-list">
				<AddTaskForm addTask={this.addTask} />
				<TaskList tasks={this.state.tasks} filter={this.state.filterType} deleteTask={this.deleteTask} setStatus={this.setStatus}/>
				<Filter setFilter={this.setFilter} />
			</div>
		);
	}
}