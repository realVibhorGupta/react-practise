export const CREATE_TODO = 'CREATE_TODO'

export const createTodoAction = todo => ({
	type : CREATE_TODO,
	payload : { todo },
})


 export const REMOVE_TODO = 'REMOVE_TODO'
 export const removeTodoAction = todo => ({
	type : REMOVE_TODO,
	payload : { todo },
})



export const UPDATE_TODO = 'UPDATE_TODO'
export const updateTodoAction = todo => ({
 type : UPDATE_TODO,
 payload : { todo },
})


export const DELETE_TODO = 'DELETE_TODO'
export const deleteTodoAction = todo => ({
 type : DELETE_TODO,
 payload : { todo },
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