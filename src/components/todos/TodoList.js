// @flow
import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { loadTodos } from "../../redux/thunks";
import {
	markTodoAsCompletedAction,
	removeTodoAction,
} from "../../redux/actions";
// import  {isLoadingReducer} from '../../redux/reducers'
import { displayAlert } from "../../redux/thunks";
import {
	getTodos,
	getTodosLoading,
	getCompletedTodos,
	getIncompleteTodos,
} from "../../redux/selectors";
const TodoList = ({
	// todolist = [],
	completedTodos,
	getIncompleteTodos,
	onRemovePressed,
	onAlertDisplayClicked,
	startLoadingTodos,
	isLoading,
}) => {
	const loadingMessage = <div>Tasks Loading... </div>;
	useEffect(() => {
		startLoadingTodos();
	}, []);

	const content = (
		<div className="list-wrapper">
			<NewTodoForm />
			<h3>Incomplete Tasks</h3>
			{uncompletedTodos.map((listItem) => {
				<TodoListItem
					task={task}
					onRemovePressed={onRemovePressed}
					onCompletedPressed={onCompletedPressed}
				/>;
			})}
			<h3>Incomplete Tasks</h3>
			{completedTodos.map((listItem) => {
				<TodoListItem
					task={task}
					onRemovePressed={onRemovePressed}
					onCompletedPressed={onCompletedPressed}
				/>;
			})}
		</div>
	);
	return isLoading ? loadingMessage : content;
};
const mapStateToProps = (state) => ({
	isLoading: getTodosLoading(state),
	completedTodos: getCompletedTodos(state),
	uncompletedTodos: getIncompletedTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
	startLoadingTodos: () => dispatch(loadTodos()),
	onRemovePressed: (id) => dispatch(removeTodoAction(id)),
	onCompletedPressed: (text) => dispatch(markTodoAsCompletedAction(text)),
	onAlertDisplayClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
