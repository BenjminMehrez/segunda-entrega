import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDContainer = () => {

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
    {
      id: 8,
      categoria: "sintetizadores",
      foto: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-7a126aebfc168f11__hmac-34cc4f4f4cdf65ea129c28e857a96f812177d307/store/enhanced/items/BehrPolyD/811065-BehrPolyD_detail2.jpg.auto.webp",
      nombre: "Behringer Poly D Polyphonic Analog Synthesizer",
      descripcion:
        "True to the original D-type circuitry Pure analog signal path 37 full-size keys with After Pressure Classic Ladder Filter with lowpass, highpass modes",
      precio: 689,
    },
    {
      id: 9,
      categoria: "interfaces",
      foto: "https://store.focusrite.com/images/products/large/MOSC0029UK_1.png",
      nombre: "Focusrite Scarlett 18i20 3rd Gen USB Audio Interface",
      descripcion:
        "High-performance 24-bit/192kHz converters 8 upgraded 3rd-generation Scarlett mic preamps Direct Monitor circuit for monitoring your input with guaranteed low-latency 2 high-headroom instrument inputs for bass, guitar, or synths",
      precio: 549,
    },
  ];

  const { id } = useParams()

  return (
    <div>
      <h1 style={{ margin: "50px"}}>{cards[id - 1].nombre}</h1>
      <div style={{ margin: "auto" }} className="col-sm-8 col-md-5">
        <img className="card-img-top" src={cards[id - 1].foto} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title" style={{ margin: "50px" }}>{cards[id - 1].nombre}</h4>
          <p className="card-text">{cards[id - 1].descripcion}</p>
          <h5 className="card-text">$ {cards[id - 1].precio} USD</h5>
          <button id={cards[id - 1].id} className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDContainer