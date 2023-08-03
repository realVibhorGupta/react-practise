import {
	createTodoAction,

	loadTodoInFailureAction,
	loadTodoInProgressAction,
	loadTodoInSuccessAction,
	removeTodoAction,
} from "./actions";

export const displayAlert = () => {
	alert("Hello");
};

export const loadTodos = async (dispatch, getState) => {
	try {
		dispatch(loadTodoInProgressAction());
		const response = await fetch("http://localhost:8080/todos");
		const todos = await response.json();
		dispatch(loadTodoInSuccessAction(todos));
	} catch (error) {
		dispatch(loadTodoInFailureAction());
		console.error(error);
	}
};

export const addTodoRequests = (text = async (dispatch) => {
	try {
		const body = JSON.stringify({ text });
		const response = await fetch("http://localhost:8080/todos", {
			headers: {
				"COntent-Type": "application/json",
			},
			method: "post",
			body,
		});
		const todo = await response.json();
		dispatch(createTodoAction(todo));
	} catch (e) {
		console.error(e);
	}
});

export const removeTodoRequests = (id = async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:8080/todos/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "delete",
		});
		const removeTodo = response.json();
		dispatch(removeTodoAction(removeTodo));
	} catch (error) {
		console.error(error);
	}
});
