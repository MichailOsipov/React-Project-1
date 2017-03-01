import React from 'react';
import ReactDOM from 'react-dom';
import Todo from 'todo';

export default class TodoList extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<div>
				{this.props.todos.map(todo =>
					<Todo 
						key={todo.id}
						{...todo}
						onClickChangeStatus={() => this.props.onClickChangeStatus(todo.id)} 
						onClickDelete={() => this.props.onClickDelete(todo.id)}
					/>
					)
				}
			</div>			
		);
	}
}