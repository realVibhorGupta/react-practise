import { createSelector  } from "reselect";
export const getTodos = state = state.todos.data;
export const getTodosLoading = state = state.todos.isLoading.data;

export const getIncompleteTodos =   createSelector(
	getTodos ,
	getTodosLoading,
	(todos, isLoading) =>isLoading ? []	 : todos.filter(todo => !todo.isCompleted)
)


export const getCompletedTodos = createSelector(
	getTodos,
	isLoading,
	(todos, isLoading) =>  isLoading ?  (<div>Add Some Todos</div>)  : todos.filter(todo => todo.isCompleted)
)



 