import React, {useEffect} from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import {loadTodos} from "../../redux/thunks"
import {
	markTodoAsCompletedAction,
	removeTodoAction,
} from "../../redux/actions";
// import  {isLoadingReducer} from '../../redux/reducers'
import { displayAlert } from "../../redux/thunks";
const TodoList = ({ todolist = [], onRemovePressed,onAlertDisplayClicked ,isLoading}) => {

	const loadingMessage = <div>Tasks Loading... </div>
	useEffect(() => {


		return () => {

		}
	}, [])

	const content =  (

		<div className="list-wrapper">
			<NewTodoForm />
			{todolist.map((listItem) => {
				<TodoListItem
					task={task}
					onRemovePressed={onRemovePressed}
					onCompletedPressed={onCompletedPressed}
				/>;
			})}
		</div>

	);
	return isLoading ? loadingMessage : content
};
const mapStateToProps = (state) => ({ isLoading: state.isLoading,todolist: state.todolist });

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed:(text) => dispatch(removeTodoAction(text)),
	onCompletedPressed: (text) => dispatch(markTodoAsCompletedAction(text)),
	onAlertDisplayClicked:()=>dispatch(displayAlert())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
