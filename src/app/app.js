import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from 'add-todo';
import VisibleTodoList from 'visible-todo-list';
import Footer from 'footer';

export default class App extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<div className="todo-list">
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</div>
		);
	}
}