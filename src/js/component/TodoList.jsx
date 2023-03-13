import React from "react";
import { useState, useEffect } from "react";

import ElementList from "./ElementList.jsx";

import {handlePOSTUserCreate, handleGET_TodoList, handlePUT_NewTodo, handlePUT_DeleteTodo} from "../store/config.js"

import "../../styles/todoList.css";


const TodoList = (props) => {
  const [value, setValue] = useState("");
  const [estado, setEstado] = useState([]);

  // ESTA FUNCION SOLO HAY QUE EJECUTARLA 1 VEZ, LA PRIMERA VEZ PARA CREAR EL USUARIO
  // POR ESO LO HACEMOS CON USEEFFECT

  function crearUsuario () {
    handlePOSTUserCreate(estado,getUSers);
  }

  // CUANDO EL USUARIO CON ESE NOMBRE YA ESTÉ CREADO, YA NO HACE FALTA USARLA MAS VECES
  // useEffect(() => {crearUsuario()},[]);

  function getUSers () {
    handleGET_TodoList(setEstado);    
  }

  useEffect(() => {getUSers()},[]);

  function addTasks (value) {

    const newObj = {label: value, done: false};
    const newArr = [...estado,newObj];

    handlePUT_NewTodo(newArr,getUSers);
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

    const newArr2 = estado.filter((item) => item != elemento);
    setEstado(newArr2);

    handlePUT_DeleteTodo(newArr2,getUSers);
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


// SIN IDs UNICAS Y CON BORRADO DE RUTAS YA QUE SON OBJETOS
// const newArr2 = estado.filter((item) => item != elemento)

// SIEMPRE USAR ID UNICAS, INDEX NO ES EL MEJOR CASO
// <ElementList key={index} elemento={item} handleClickSpan={handleClickSpan}/> 

// INTENTAR NO USAR VARIABLES EXTERNAS, MEJOR CREAR ESTADO E IR CAMBIANDO, PORQUE LUEGO AL EXPORTAR Y USAR O GUARDAR EN 
// LA MEMORIA Y RECUPERAR DATOS VA A FALLAR O PUEDE DAR FALLOS