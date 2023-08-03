import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { connect } from "react-redux";
import { createTodoAction } from "../../redux/actions";
import {getTodos} from '../../redux/selectors'
const NewTodoForm = ({ todos, onCreatePressed }) => {
	const [inputValue, setInputValue] = useState("");

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
				<input
					placeholder="Add Your Task Here"
					className="w-full py-3 bg-gray-100 rounded pl-10 focus:outline-none text-sm leading-none text-gray-600 placeholder-gray-600 border-b"
					{...register("Add Your Task Here", { required: true })}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				{errors.exampleRequired && <span>This field is required</span>}
				<input
					type="submit"
					className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center	cursor-pointer"
					onClick={() => {
						const isDuplicateValue = todos.some(
							(todo) => todo.text === inputValue
						);
						console.info(todos);
						if (!isDuplicateValue) {
							onCreatePressed(inputValue);
							setInputValue("");
						}
					}}
				/>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	todos: getTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
	onCreatePressed: (text) => dispatch(createTodoAction(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
