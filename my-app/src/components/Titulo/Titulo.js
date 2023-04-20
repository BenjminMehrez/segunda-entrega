import React from "react";
import "./titulo.css";

const ItemListContainer = (props) => {
  const { titulo } = props;
  return (
    <div>
      <div className="titulo">
        <h1>{titulo}</h1>
        <div className="principal"></div>
      </div>
    </div>
  );
};

export default ItemListContainer;
