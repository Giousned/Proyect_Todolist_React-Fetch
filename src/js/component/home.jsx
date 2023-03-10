import React from "react";

import TodoList from "./TodoList.jsx";
import Boton from "./Boton.jsx";

//create your first component
const Home = () => {

	const handleDeleteAll = () => {

		fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is were your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch(error => {console.log(error);});  //Error handling
	}

	return (
		<div className="">
			<Boton handleDeleteAll={handleDeleteAll} />
			<TodoList />
		</div>
	);
};

export default Home;
