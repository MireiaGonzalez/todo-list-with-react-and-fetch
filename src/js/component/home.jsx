//Import React
import React, { useState, useEffect } from "react";

//Import service
import { getTodos, updateTodos } from "../../service/todo.js";

//Import components
import NavBar from "./NavBar.jsx";
import AddTodos from "./AddTodos.jsx";
import UnfinishedTodo from "./UnfinishedTodo.jsx";

//Components
const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [todoObj, setTodoObj] = useState({});
	const [todosList, setTodosList] = useState([]);

	const handleChange = (e) => {
		setNewTodo(e.target.value);
		const newObj = {
			label: e.target.value,
			done: false,
		};
		setTodoObj(newObj);
	};

	const addNewTodo = () => {
		const newList = [...todosList, todoObj];
		setTodosList(newList);
		setNewTodo("");
	};
	const handleDoneTask = (index) => {
		todosList[index].done = true;
		console.log(todosList[index]);
	};

	useEffect(() => {
		if (todosList.length === 0) {
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
		} else {
			updateTodos(todosList)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [todosList]);

	console.log({ todosList });
	console.log({ todoObj });
	return (
		<div>
			<NavBar />
			<AddTodos
				default={newTodo}
				newTodo={handleChange}
				addTodo={addNewTodo}
			/>
			{todosList.length > 0 ? (
				<div className="card">
					<ul className="list-group list-group-flush">
						{todosList.map((todo, index) => {
							if (todo.done === false) {
								return (
									<UnfinishedTodo
										todo={todo.label}
										key={index}
										id={index}
										doneTaskButton={handleDoneTask}
									/>
								);
							}
						})}
					</ul>
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
