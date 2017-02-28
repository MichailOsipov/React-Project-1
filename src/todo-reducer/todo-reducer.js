const todoReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return 	{
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (todo.id !== action.id) {
					return state;
				}
				
			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}       
};

const todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(todo => todo(t, action));
		default:
			return state;
	}
};

export default todosReducer;