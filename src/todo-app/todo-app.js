import todoReducer from 'todo-reducer';
import visibilityFilterReducer from 'visibility-filter-reducer';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
	todos: todoReducer,
	visibilityFilter: visibilityFilterReducer
});

export default todoApp;