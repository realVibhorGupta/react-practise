import { CREATE_TODO, REMOVE_TODO, UPDATE_TODO, DELETE_TODO } from "./actions";


export const todosReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case CREATE_TODO: {
			const { text } = payload;
			const newTask = {
				text,
				isCompleted: false,
			};
			return state.concat(newTask);
		}
		case UPDATE_TODO: {
			const { text } = payload;
			const newTask = {
				text,
				isCompleted: false,
			};
			return state.concat(newTask);
		}
		case REMOVE_TODO: {
			const { text } = payload;

			return state.filter((todo) => todo.text !== text);
		}
		case DELETE_TODO: {
			const { text } = payload;
			return state.filter((todo) => todo.text !== text);
		}
		default:
			return state;
	}
	
};
