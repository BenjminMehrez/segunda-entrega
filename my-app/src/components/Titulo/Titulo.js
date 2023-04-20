import React from "react";
import "./titulo.css";

const ItemLContainer = (props) => {
  const { titulo } = props;
  return (
    <div>
      <div className="titulo text-decoration-underline">
        <h1>{titulo}</h1>
        <div className="principal"></div>
      </div>
    </div>
  );
};

export default ItemLContainer;
