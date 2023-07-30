import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { connect } from "react-redux";
import { createTodoAction } from "../../redux/actions";
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
			/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}

				{/* include validation with required or other standard HTML validation rules */}
				<input
					{...register("Add Your Task Here", { required: true })}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && <span>This field is required</span>}

				<input
					type="submit"
					onClick={() => {
						const isDuplicateValue = todos.some(
							(todo) => todo.text === inputValue
						);
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
	todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
	onCreatePressed: (text) => dispatch(createTodoAction(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
