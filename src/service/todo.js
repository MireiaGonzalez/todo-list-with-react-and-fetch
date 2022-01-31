export const getTodos = () => {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/mireiagonzalez",
		{ method: "GET" }
	);
};
