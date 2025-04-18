import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";

const Pizza = () => {

  const [pizza, setPizza] = useState([])
  const { id } = useParams();
  const { addToCart } = useContext(CartContext)

  const url = `http://localhost:5000/api/pizzas/${id}`;

  useEffect(() => {
    getData()
  }, [url]);

  const getData = async () => {   
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data)
  }
  return ( 
    <div className='mt-5 pt-5 container'>
      <div className='row'>
        <div className='col-12 col-md-4'>
          <div className="card" >
            <img src={pizza.img} className="card-img-top img-fluid" alt="foto pizza"/>
            <div className="card-body">
              <h5 className="card-title">🍕 {pizza.name}</h5>
              <p className="card-text">{pizza.desc}</p>
              <hr />
              <p>{ pizza.ingredients && pizza.ingredients.join(', ')}</p>
              <hr />
              <h3 className='mb-4'>$ {pizza.price && pizza.price.toLocaleString('es-CL')}</h3>
              <button className='btn btn-dark' onClick={() => addToCart(pizza)}>Añadir al carrito 🛒</button>
            </div>                   
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Pizza;