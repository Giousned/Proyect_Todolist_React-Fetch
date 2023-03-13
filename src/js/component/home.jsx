import React from "react";

import TodoList from "./TodoList.jsx";
import Boton from "./Boton.jsx";

import {handleDELETE_TodosAndUser} from "../store/config.js"

//create your first component
const Home = () => {

	const handleDeleteAll = () => {
		handleDELETE_TodosAndUser();
	}


	return (
		<div className="">
			<Boton handleDeleteAll={handleDeleteAll} />
			<TodoList />
		</div>
	);
};

export default Home;
