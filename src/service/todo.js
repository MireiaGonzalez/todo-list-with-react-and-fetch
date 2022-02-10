export const getTodos = () => {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/mireiagonzalez",
		{ method: "GET" }
	);
};

export const updateTodos = (todos) => {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/mireiagonzalez",
		{
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};
