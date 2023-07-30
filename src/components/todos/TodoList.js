import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { removeTodoAction } from "../../redux/actions";

 const TodoList = ({ todolist = [], onRemovePressed }) => {
	return (
		<div className="list-wrapper">
			<NewTodoForm />
			{todolist.map((listItem) => {
				<TodoListItem task={task} onRemovePressed={onRemovePressed} />;
			})}
		</div>
	);
};
const mapStateToProps = (state) => ({ todolist: state.todolist });

const mapDispatchToProps = (dispatch = {
	onRemovePressed: (text) => dispatch(removeTodoAction(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
