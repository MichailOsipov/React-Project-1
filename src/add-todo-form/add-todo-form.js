import React from 'react';
import ReactDOM from 'react-dom';
import './add-todo-form.scss';

export default class AddTodoForm extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {value: '', nextTodoId: 1};
	}
	
	handleChange(event){
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event){
		this.props.onSubmit(this.state.nextTodoId, this.state.value);

		this.setState(prevState => ({
			value: '',
			nextTodoId: prevState.nextTodoId + 1
		}));
		
		event.preventDefault();
	}
	
	render() {
		return (
			<form className="add-todo" onSubmit={this.handleSubmit}>
				<input 
					className="add-todo-input" 
					type="text" value={this.state.value} 
					onChange={this.handleChange} 
					placeholder="What should be done?"
				/>
				<input type="submit" value="Add" />
			</form>
		);
	}
}
