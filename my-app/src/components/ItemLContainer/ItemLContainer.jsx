import React from 'react'
import { useParams } from 'react-router-dom';
import Card from "../Card/Card";
import Titulo from "../Titulo/Titulo"

const ItemLContainer = () => {

    const cards = [
        {
          id: 1,
          categoria: "zapatillas",
          foto: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
          nombre:
            "Adibas GrisMMZ",
          descripcion:
            "Super deportivas y comodas",
          precio: 300,
        },
        {
          id: 2,
          categoria: "zapatillas",
          foto: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
          nombre: "Adibas Classic",
          descripcion:
            "Clasicas de Adibas",
          precio: 150,
        },
        {
          id: 3,
          categoria: "zapatillas",
          foto: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
          nombre: "Adibas Blancas",
          descripcion:
            "Adibas Blancas super facheras",
          precio: 200,
        },
        {
          id: 4,
          categoria: "zapatillas",
          foto: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
          nombre:
            "Adibas Boots",
          descripcion:
            "Adibas ideales para Campo",
          precio: 350,
        },
        {
          id: 5,
          categoria: "remeras",
          foto: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          nombre: "Remera Adibas Azul",
          descripcion:
            "Remera Azul",
          precio: 90,
        },
        {
          id: 6,
          categoria: "remeras",
          foto: "https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          nombre: "Adibas Remera Classic",
          descripcion:
            "Remera clasica",
          precio: 110,
        },
        {
          id: 7,
          categoria: "camperas",
          foto: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
          nombre:
            "Campera Adibas",
          descripcion:
            "Campera de cuero Adibas",
          precio: 500,
        },
      ];

      const {categoria} = useParams()
      const filter = categoria ? cards.filter ((item) => item.categoria === categoria) : cards


  return (
    
    <div>
        <Titulo
        titulo="Sómos Adibas no Adidas"
        ></Titulo>

    <div className="d-flex container-fluid row" style={{ margin: "auto" }}>
    {filter.map(({ nombre, descripcion, foto, precio, id }, index) => (
      <Card
        key={index}
        id={id}
        nombre={nombre}
        descripcion={descripcion}
        foto={foto}
        precio={precio}
      />
    ))}
  </div>
  </div>
  )
}

export default ItemLContainer