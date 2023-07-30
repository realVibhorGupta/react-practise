import React from "react";

const TodoListItem = ({ task,onRemovePressed }) => {
	return (
		<div>
			<h3>{task.text}</h3>
			<div>
				<button className="">Mark As Completed</button>
				<button className="" onClick={onRemovePressed(task.text)}>Remove</button>
			</div>
		</div>
	);
};


export default TodoListItem