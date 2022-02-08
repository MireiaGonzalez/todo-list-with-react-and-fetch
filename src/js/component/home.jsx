//Import React
import React, { useState, useEffect } from "react";

//Import service
import { getTodos, updateTodos } from "../../service/todo.js";

//Import components
import NavBar from "./NavBar.jsx";
import AddTodos from "./AddTodos.jsx";

//Components
const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [todosList, setTodosList] = useState([]);

	const addNewTodo = () => {
		const newList = [...todosList, newTodo];
		setTodosList(newList);
		setNewTodo("");
	};

	useEffect(() => {
		getTodos()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setTodosList(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	console.log({ newTodo });
	console.log({ todosList });
	return (
		<div>
			<NavBar />
			<AddTodos
				default={newTodo}
				newTodo={(e) => setNewTodo(e.target.value)}
				addTodo={addNewTodo}
			/>
			{todosList.length > 1 ? (
				<div className="card">
					<ul className="list-group list-group-flush"></ul>
				</div>
			) : (
				<div className="card">
					<h3 className="card-body p-5 text-center" id="empty-list">
						Empty! Add a Task
					</h3>
				</div>
			)}
		</div>
	);
};

export default Home;
