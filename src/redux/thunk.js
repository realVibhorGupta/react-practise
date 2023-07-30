import { loadTodoInFailureAction, loadTodoInProgressAction, loadTodoInSuccessAction } from "./actions"

export const displayAlert=() => {
	alert('Hello')
}

export const loadTodos =async (dispatch,getState) => {
	try{
		dispatch(loadTodoInProgressAction());
	const response = await fetch('http://localhost:8080/todos')
	const todos = await response.json();
	dispatch(loadTodoInSuccessAction(todos));
	}catch(error){
		dispatch(loadTodoInFailureAction());
		console.error(error)	
	}

}