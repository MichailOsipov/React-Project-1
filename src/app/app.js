import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from 'add-todo';
import VisibleTodoList from 'visible-todo-list';
import Footer from 'footer';
import './app.scss';

export default class App extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<div className="app">
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</div>
		);
	}
}