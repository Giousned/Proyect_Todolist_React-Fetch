import React from "react";
import { useState, useEffect } from "react";

import ElementList from "./ElementList.jsx";

import "../../styles/todoList.css";

const arr = [{id: 0, label: "Eat"},{id: 1, label: "Drink"}];

let contador = 2;

const TodoList = () => {
  const [value, setValue] = useState("");
  const [estado, setEstado] = useState(arr);

  function addTasks (value) {
    setEstado( prev => {
      contador += 1;
        const newObj = {id: contador, label: value};
        const newArr = [...prev,newObj];
        return newArr;
    })
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
    setEstado( prev => {
      const newArr2 = prev.filter((item) => item.id != elemento)
      return newArr2;
    })
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
        {estado.map((item)=>(
            <ElementList key={item.id} elemento={item} handleClickSpan={handleClickSpan}/>
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