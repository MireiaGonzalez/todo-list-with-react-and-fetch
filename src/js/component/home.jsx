//Import React
import React, { useState, useEffect } from "react";

//Import service
import { getTodos, updateTodos } from "../../service/todo.js";

//Import components
import NavBar from "./NavBar.jsx";
import AddTodos from "./AddTodos.jsx";
import UnfinishedTodo from "./UnfinishedTodo.jsx";
import FinishedTodos from "./FinishedTodos.jsx";

//Components
const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [todoObj, setTodoObj] = useState({});
	const [todosList, setTodosList] = useState([]);
	const [doneTodosList, setDoneTodosList] = useState([]);
	const [emptyList, setEmptyList] = useState([]);

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
		const finishedTaskList = [...doneTodosList, todosList[index]];
		todosList.splice(index, 1);
		setDoneTodosList(finishedTaskList);
	};

	const deleteTodoDoneTasks = (index) => {
		const doneTasksCopy = [...doneTodosList];
		doneTasksCopy.splice(index, 1);
		setDoneTodosList(doneTasksCopy);
	};

	const deleteTodoTodosList = (index) => {
		if (todosList.length > 1) {
			const todosListCopy = [...todosList];
			todosListCopy.splice(index, 1);
			setTodosList(todosListCopy);
		} else {
			setTodosList([]);
		}
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
	useEffect(() => {
		let update = [...todosList, ...doneTodosList];
		updateTodos(update)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [todosList, doneTodosList]);

	console.log({ todosList });
	return (
		<div>
			<NavBar />
			<AddTodos
				default={newTodo}
				newTodo={handleChange}
				addTodo={addNewTodo}
			/>
			{todosList.length > 0 || doneTodosList.length > 0 ? (
				<div className="card">
					<ul className="list-group list-group-flush">
						{todosList.map((todo, index) => {
							if (todo.done === false) {
								return (
									<UnfinishedTodo
										key={index}
										todo={todo.label}
										id={index}
										doneTaskButton={handleDoneTask}
										deleteTodo={deleteTodoTodosList}
									/>
								);
							}
						})}
					</ul>
					{doneTodosList.map((todo, index) => {
						return (
							<FinishedTodos
								todo={todo.label}
								id={index}
								key={index}
								deleteTodo={deleteTodoDoneTasks}
							/>
						);
					})}
					{todosList.map((todo, index) => {
						if (todo.done === true) {
							return (
								<FinishedTodos
									todo={todo.label}
									id={index}
									key={index}
									deleteTodo={deleteTodoTodosList}
								/>
							);
						}
					})}
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
