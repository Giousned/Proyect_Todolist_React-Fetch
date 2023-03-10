import React from "react";

const Boton = (props) => {
    return (<button type="button" onClick={props.handleDeleteAll} className="btn btn-danger d-flex mx-auto mt-2">Eliminar Usuario + Tareas</button>);
}

export default Boton;