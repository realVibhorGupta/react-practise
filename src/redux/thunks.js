import {
	loadTodoInFailureAction,
	loadTodoInProgressAction,
	loadTodoInSuccessAction,
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


const addTodoRequests = async text => {
	try{}catch(e){
		const body = JSON.stringify({text});
		const response = await fetch("http://localhost:8080/todos" ,	{

			headers:{
				'COntent-Type': 'application/json',
			},
			method:'post',
			body

			});

		console.error(e)
	}
}