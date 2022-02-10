import React from "react";
import PropTypes from "prop-types";

const UnfinishedTodo = (props) => {
	return (
		<li
			className="list-group-item d-flex align-items-center"
			key={props.liKey}>
			<button
				className="btn btn-success d-flex align-items-center justify-content-center me-2"
				onClick={() => props.doneTaskButton(props.id)}>
				✓
			</button>
			{props.todo}
			<button
				className="btn btn-danger d-flex align-items-center justify-content-center ms-auto"
				onClick={() => props.deleteTodo(props.id)}>
				<img
					id="trash-icon"
					src="https://cdn-icons.flaticon.com/png/512/2907/premium/2907762.png?token=exp=1644414347~hmac=d1175b363129171bc9d19f486ba7c2f0"
					alt=""
				/>
			</button>
		</li>
	);
};

UnfinishedTodo.propTypes = {
	liKey: PropTypes.number,
	doneTaskButton: PropTypes.func,
	todo: PropTypes.string,
	deleteTodo: PropTypes.func,
	parameter: PropTypes.number,
};

export default UnfinishedTodo;
