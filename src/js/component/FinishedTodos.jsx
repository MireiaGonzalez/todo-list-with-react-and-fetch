import React from "react";
import PropTypes from "prop-types";

const FinishedTodos = (props) => {
	return (
		<div className="card-footer text-muted d-flex align-items-center">
			{props.todo}
			<button
				className="btn btn-danger d-flex align-items-center justify-content-center ms-auto"
				onClick={() => props.deleteTodo(props.id, props.arr)}>
				<img
					id="trash-icon"
					src="https://cdn-icons.flaticon.com/png/512/2907/premium/2907762.png?token=exp=1644414347~hmac=d1175b363129171bc9d19f486ba7c2f0"
					alt=""
				/>
			</button>
		</div>
	);
};

FinishedTodos.propTypes = {
	todo: PropTypes.string,
	deleteTodo: PropTypes.func,
	id: PropTypes.number,
	arr: PropTypes.array,
};

export default FinishedTodos;
