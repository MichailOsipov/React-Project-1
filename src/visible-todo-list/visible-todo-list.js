import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'todo-list';
import { connect } from 'react-redux';

function getVisibleTodos (todos, filter) {
	switch(filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_ACTIVE':
			return todos.filter(todo => !todo.completed);
		case 'SHOW_COMPLETED':
			return todos.filter(todo => todo.completed);
	}
}
	
const mapStateToTodoListProps = (state) => {
	return {
		todos: getVisibleTodos(
			state.todos,
			state.visibilityFilter
		)
	};
};

const mapDispatchToTodoListProps = (dispatch) => {
	return {
		onClickChangeStatus:  id => {
				dispatch({
					type: 'TOGGLE_TODO',
					id
				});						
			},
		onClickDelete: id => {
				dispatch({
					type: 'REMOVE_TODO',
					id
				});
			}
	};
};

const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
