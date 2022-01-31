import React from "react";
import PropTypes from "prop-types";

const AddTodos = (props) => {
	return (
		<div
			id="todos-print"
			className="d-flex justify-content-center align-items-center mb-4">
			<input
				value={props.default}
				type="text"
				className="form-control"
				id="todo-input"
				onChange={props.newTodo}
			/>
			<button
				type="button"
				className="btn btn-primary ms-3"
				onClick={props.addTodo}>
				Add Task
			</button>
		</div>
	);
};

AddTodos.proptypes = {
	newTodo: PropTypes.func,
	addTodo: PropTypes.func,
	default: PropTypes.string,
};

export default AddTodos;
