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

export const isLoadingReducer = (state = false, action) => {
	const type = { action };

	switch (type) {
		case LOAD_TODOS_IN_SUCCESS:

		case LOAD_TODOS_IN_PROGRESS:
			return true;
		case LOAD_TODOS_IN_FAILURE:
			return false;
		default:
			return state;
	}
};

const initialState = { isLoading: false, data: [] };

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
		case MARK_TASK_AS_COMPLETED:
			const { text } = payload;
			return state.map((todo) => {
				if (todo.text === text) {
					return { ...todo, isCompleted: true };
				}
				return true;
			});

		default:
			return state;
	}
};
