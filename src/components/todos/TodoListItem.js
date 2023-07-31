import React from "react";

const TodoListItem = ({ task, onRemovePressed, onCompletedPressed }) => {
	return (
		<div>
			<h3>{task.text}</h3>
			<div>
				{task.isCompleted ? null : (
					<button onClick={() => onCompletedPressed(task.text)} className="">
						Mark As Completed
					</button>
				)}

				<button className="" onClick={onRemovePressed(task.text)}>
					Remove
				</button>
			</div>
		</div>
	);
};

export default TodoListItem;
