import React from 'react';
import ReactDOM from 'react-dom';
import './task.scss';

export default class Task extends React.Component {
	constructor(props){
		super(props);
		this.handleChangeStatus = this.handleChangeStatus.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.getTextClass = this.getTextClass.bind(this);
	}
	
	handleChangeStatus() {
		let newStatus = this.props.status == 'Active' ? 'Complete' : 'Active';
		this.props.setStatus(this.props.reactId, newStatus);
	}
	
	handleDelete() {
		this.props.deleteTask(this.props.reactId);		
	}
	
	getTextClass() {
		let initialClassName = "task-text-block";
		
		return this.props.status == 'Active' ? initialClassName : initialClassName + " line-through";
	}
	
	render() {
		return (
			<div className="task">
				<input type="button" onClick={this.handleChangeStatus} value={this.props.status=='Active' ? 'set as Complete' : 'set as Active'}/>
				<div className={this.getTextClass()}>{this.props.text}</div>
				<input type="button" onClick={this.handleDelete} value="Delete"/>
			</div>
		);
	}
}