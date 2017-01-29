import React from 'react';
import ReactDOM from 'react-dom';

export default class Task extends React.Component {
	constructor(props){
		super(props);
		this.handleChangeStatus = this.handleChangeStatus.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	
	handleChangeStatus() {
		let newStatus = this.props.status == 'Active' ? 'Complete' : 'Active';
		this.props.setStatus(this.props.reactId, newStatus);
	}
	
	handleDelete() {
		this.props.deleteTask(this.props.reactId);		
	}
	
	render() {
		return (
			<div className="task">
				<input type="button" onClick={this.handleChangeStatus} value={this.props.status=='Active' ? 'set as Complete' : 'set as Active'}/>
				{this.props.text}
				<input type="button" onClick={this.handleDelete} value="Delete"/>
			</div>
		);
	}
}