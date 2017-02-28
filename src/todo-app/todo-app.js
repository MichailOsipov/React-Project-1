/*const todoApp = (state = {}, action) => {
	return {
		todo: todos(
			state.todos,
			action
		),
		visibilityFilter: visibilityFilter(
			state.visibilityFilter,
			action
		)
	};
};*/

import todoReducer from 'todo-reducer';
import visibilityFilterReducer from 'visibility-filter-reducer';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
	todos: todoReducer,
	visibilityFilter: visibilityFilterReducer
});

export default todoApp;