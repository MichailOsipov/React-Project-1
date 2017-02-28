import React from 'react';
import ReactDOM from 'react-dom';
import './todo.scss';

export default class Todo extends React.Component {
	constructor(props){
		super(props);
		this.getTextClass = this.getTextClass.bind(this);
	}
	//исправь тут
	getTextClass() {
		let initialClassName = "todo-text-block";		
		return !this.props.completed ? initialClassName : initialClassName + " line-through";
	}
	
	render() {
		return (
			<div className="todo">
				<input 
					type="button" 
					onClick={this.props.onClickChangeStatus} 
					value={!this.props.completed ? 'set as Complete' : 'set as Active'}
				/>
				<div 
				className={this.getTextClass()}
				>
					{this.props.text}
				</div>
				<input 
					type="button" 
					onClick={this.props.onClickDelete} 
					value="Delete"
				/>
			</div>
		);
	}
}