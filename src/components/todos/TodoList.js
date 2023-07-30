import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import {
	markTodoAsCompletedAction,
	removeTodoAction,
} from "../../redux/actions";
// import  {isLoadingReducer} from '../../redux/reducers'
import { displayAlert } from "../../redux/thunk";
const TodoList = ({ todolist = [], onRemovePressed,onAlertDisplayClicked ,isloading}) => {

	const loadingMessage = <div>Tasks Loading... </div>
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
	return isloading ? loadingMessage : content
};
const mapStateToProps = (state) => ({ todolist: state.todolist });

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed:(text) => dispatch(removeTodoAction(text)),
	onCompletedPressed: (text) => dispatch(markTodoAsCompletedAction(text)),
	onAlertDisplayClicked:()=>dispatch(displayAlert())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
