import React from 'react';
import ReactDOM from 'react-dom';
import './todo.scss';

export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.generateCompletedTodoClassName = this.generateCompletedTodoClassName.bind(this);
		this.generateCompletedAddButtonClassName = this.generateCompletedAddButtonClassName.bind(this);
	}
	//this.props.completed
	
	generateCompletedTodoClassName() {
		let className = "content todo__content";
		return this.props.completed ? className + " todo__content_completed" : className;
	}
	generateCompletedAddButtonClassName() {
		let className = "button-icon button-opacity todo__add-button";
		return this.props.completed ? className + " add-button-completed" : className + " add-button-uncompleted";
	}
	
	render() {
		return (
			<div className="todo">
				<input
					className={this.generateCompletedAddButtonClassName()}
					type="button" 
					onClick={this.props.onClickChangeStatus} 
					value=""
				/>
				<div className={this.generateCompletedTodoClassName()}>
					{this.props.text}
				</div>
				<input
					className="button-icon button-opacity remove-button todo__remove-button"
					type="button" 
					onClick={this.props.onClickDelete} 
					value=""
				/>
			</div>
		);
	}
}