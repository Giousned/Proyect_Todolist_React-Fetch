import React from "react";
import { useState, useEffect } from "react";

import ElementList from "./ElementList.jsx";

import "../../styles/todoList.css";


// let contador = 0;
// {id: 0, label: "Example Task Create", done: false}

const TodoList = (props) => {
  const [value, setValue] = useState("");
  const [estado, setEstado] = useState([{label: "Example Task Create", done: false}]);

  //ESTA FUNCION SOLO HAY QUE EJECUTARLA 1 VEZ, LA PRIMERA VEZ PARA CREAR EL USUARIO
  // POR ESO LO HACEMOS CON USEEFFECT
  function crearUsuario () {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
      method: "POST",
      body: JSON.stringify(estado),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((resp) => {
      console.log(resp.ok); // will be true if the response is successfull
      console.log(resp.status); // the status code = 200 or code = 400 etc.
      console.log(resp.text()); // will try return the exact result as string
      return resp; //(returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((data) => {
      //here is were your code should start after the fetch finishes
      console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {console.log(error);});  //Error handling
  }

  // COMO EL USUARIO CON ESE NOMBRE YA HE CONSEGUIDO CREARLO YA NO HACE FALTA USARLA MAS VECES
  useEffect(() => {crearUsuario()},[]);

  function getUSers () {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
      method: "GET",
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
        setEstado(data);
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {console.log(error);});  //Error handling
  }

  // useEffect(() => {getUSers()},[]);

  function addTasks (value) {

    const newObj = {label: value, done: false};
    const newArr = [...estado,newObj];

    fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
        method: "PUT",
        body: JSON.stringify(newArr),
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
          getUSers();
      })
      .catch(error => {console.log(error);});  //Error handling
  }


  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      if(value !== ""){
        addTasks(value);
        setValue("");
      }
      else alert("Escribe una tarea!");
    }
  }


  const handleClickSpan = (elemento) => {

    console.log(elemento);
    console.log(estado);

    const newArr2 = estado.filter((item) => item != elemento)

    fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
        method: "PUT",
        body: JSON.stringify(newArr2),
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
        getUSers();
    })
    .catch(error => {console.log(error);});  //Error handling
  }


  return (
    <div id="container">
      <h1 className="todo-header">To do List</h1>
      <input
        id="addToDo"
        type="text"
        placeholder="Add to do here"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => handleKeyDown(e)}
      />
      <ul>
        {estado.map((item, index)=>(
            <ElementList key={index} elemento={item} handleClickSpan={handleClickSpan}/>
        ))}
      </ul>
      <div className="todo-bottom"> {(estado.length) ? ((estado.length > 1) ? `${estado.length} items left` : `${estado.length} item left`) : "No tasks! Add a new task!"}</div>
    </div>
  );
};

export default TodoList;


// SIEMPRE USAR ID UNICAS, INDEX NO ES EL MEJOR CASO
// <ElementList key={index} elemento={item} handleClickSpan={handleClickSpan}/> 

// INTENTAR NO USAR VARIABLES EXTERNAS, MEJOR CREAR ESTADO E IR CAMBIANDO, PORQUE LUEGO AL EXPORTAR Y USAR O GUARDAR EN 
// LA MEMORIA Y RECUPERAR DATOS VA A FALLAR O PUEDE DAR FALLOS