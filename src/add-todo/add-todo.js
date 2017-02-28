import React from 'react';
import ReactDOM from 'react-dom';
import AddTodoForm from 'add-todo-form';
import { connect } from 'react-redux';

const mapDispatchToAddTodoFormProps = (dispatch) => {
	return {
		onSubmit: (id, text) => {
			dispatch({
				type: 'ADD_TODO',
				text,
				id
			});						
		}
	};
};

const AddTodo = connect(
	null,
	mapDispatchToAddTodoFormProps
)(AddTodoForm);

export default AddTodo;