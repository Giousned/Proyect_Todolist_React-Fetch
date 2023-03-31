import React from "react";

const ElementList = (props) => {

  const handleElemento = () => {

    props.handleClickSpan(props.elemento)

  }

  return (
    <li>
      <span onClick={handleElemento}>
        <i className="fa fa-trash"></i>
      </span>
      {props.elemento.label}
    </li>
  );
};

export default ElementList;


{/* TAMBIEN SE PUEDE HACER ASI, DECLARANDO FUNCION ANONIMA Y EJECUTANDOLA EN EL ONCLICK, PERO ES PEOR
PORQUE LUEGO EL EVENT LISTENER NO PUEDE BORRAR ESA FUNCION CUANDO DEJA DE USARLA
<li>
  <span onClick={() => props.handleClickSpan(props.elemento)}>
    <i className="fa fa-trash"></i>
  </span>
  {props.elemento.label}
</li>
*/}