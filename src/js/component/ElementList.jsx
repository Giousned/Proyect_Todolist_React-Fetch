import React from "react";

const ElementList = (props) => {

  return (
    <li>
      <span onClick={() => props.handleClickSpan(props.elemento)}>
        <i className="fa fa-trash"></i>
      </span>
      {props.elemento.label}
    </li>
  );
};

export default ElementList;