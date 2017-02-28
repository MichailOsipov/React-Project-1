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
			}/*,
		onClickDelete = { id =>
			this.props.deleteTodo(id); //изменим потом
		}*/
	};
};

const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;

/*export default class VisibleTodoList extends React.Component {
	constructor(props){
		super(props);
		this.getVisibleTodos= this.getVisibleTodos.bind(this);
	}
	
	componentDidMount() {
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}
	
	deleteTodo(id){
		let newTasksList = this.state.tasks.slice();
		for(let i=0;i<newTasksList.length;i++){
			if(newTasksList[i].id==id){
				newTasksList.splice(i,1);
				break;
			}
		}
		this.setState({
			tasks: newTasksList
		});
	}
/*	
	render() {		
		const props = this.props;
		const state = store.getState();
		
		return (
			<TodoList
				todos = {
					this.getVisibleTodos(state.todos, state.visibilityFilter)
				}
				
			/>		
		);
	}
}*/