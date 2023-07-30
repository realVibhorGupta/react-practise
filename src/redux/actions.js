export const CREATE_TODO = 'CREATE_TODO'

export const createTodoAction = text => ({
	type : CREATE_TODO,
	payload : { text },
})


 export const REMOVE_TODO = 'REMOVE_TODO'
 export const removeTodoAction = text => ({
	type : REMOVE_TODO,
	payload : { text },
})



export const UPDATE_TODO = 'UPDATE_TODO'
export const updateTodoAction = text => ({
 type : UPDATE_TODO,
 payload : { text },
})


export const DELETE_TODO = 'DELETE_TODO'
export const deleteTodoAction = text => ({
 type : DELETE_TODO,
 payload : { text },
})

export const MARK_TASK_AS_COMPLETED = "MARK_TASK_AS_COMPLETED"

export const markTodoAsCompletedAction = text => ({
	type : MARK_TASK_AS_COMPLETED,
	payload : { text },
 })


// export const markTaskAsCompletedAction = text => ({
// 	type : MARK_TASK_AS_COMPLETED,
// 	payload : { boolean  },
//  })

// Thumks
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';

export const loadTodoInProgressAction = () => ( {
	type:LOAD_TODOS_IN_PROGRESS
})

export const LOAD_TODOS_IN_SUCCESS = 'LOAD_TODOS_IN_SUCCESS';

export const loadTodoInSuccessAction = text => ({
	type:LOAD_TODOS_IN_SUCCESS,
	payload : { text },
})

export const LOAD_TODOS_IN_FAILURE = 'LOAD_TODOS_IN_SUCCESS';

export const loadTodoInFailureAction = () =>( {
	 type :LOAD_TODOS_IN_FAILURE
})