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



// export const markTaskAsCompletedAction = text => ({
// 	type : MARK_TASK_AS_COMPLETED,
// 	payload : { boolean  },
//  })
 