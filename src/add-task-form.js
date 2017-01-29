import React from 'react';
import ReactDOM from 'react-dom';

export default class AddTaskForm extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {value: ''};
	}
	
	handleChange(event){
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event){
		this.props.addTask(this.state.value);
		event.preventDefault();
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<input type="submit" value="Add" />
			</form>
		);
	}
}
