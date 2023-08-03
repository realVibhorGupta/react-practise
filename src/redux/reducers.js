import {
	CREATE_TODO,
	REMOVE_TODO,
	UPDATE_TODO,
	DELETE_TODO,
	MARK_TASK_AS_COMPLETED,
	LOAD_TODOS_IN_SUCCESS,
	LOAD_TODOS_IN_PROGRESS,
	LOAD_TODOS_IN_FAILURE,
} from "./actions";

const initialState = { isLoading: false, data: [] };

export const todosReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CREATE_TODO: {
			const { todo } = payload;
			// const newTask = {
			// 	text,
			// 	isCompleted: false,
			// };
			return { ...state, data: state.data.concat(todo) };
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
			const { todo: todoToRemove } = payload;

			return {
				...state,
				data: state.data.filter((todo) => todo.id !== todoToRemove.id),
			};
		}
		case DELETE_TODO: {
			const { text } = payload;
			return null;
		}
		case MARK_TASK_AS_COMPLETED:
			const { todo: updatedTodo } = payload;
			return state.map((todo) => {
				if (todo.id === updatedTodo.id) {
					return updatedTodo;
				}
				return todo;
			});
		case LOAD_TODOS_IN_SUCCESS:
			const { todos } = payload;
			return { ...state, isLoading: false, data: todos };

		case LOAD_TODOS_IN_PROGRESS:
			return {
				...state,
				isLoading: true,
			};
		case LOAD_TODOS_IN_FAILURE:
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};
