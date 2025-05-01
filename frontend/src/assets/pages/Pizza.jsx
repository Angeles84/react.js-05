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
      <div className='row pt-3'>

        <div className="card mb-3 py-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={pizza.img} className="img-fluid" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body py-0">
                  <h5 className="card-title mt-3 mt-md-0">🍕 {pizza.name}</h5>
                  <p className="card-text">{pizza.desc}</p>
                  <hr />
                  <p><b>Ingredientes: </b>{ pizza.ingredients && pizza.ingredients.join(', ')}</p>
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <h3 className='mb-0'>$ {pizza.price && pizza.price.toLocaleString('es-CL')}</h3>
                    <button className='btn btn-dark' onClick={() => addToCart(pizza)}>Añadir al carrito 🛒</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
 
export default Pizza;