import { useState, useEffect} from 'react'

const Pizza = () => {

  const [pizza, setPizza] = useState([])

  useEffect(() => {
    getData()
  }, []);

  const url = 'http://localhost:5000/api/pizzas/p001';

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
              <p>{pizza.ingredients.join(', ')}</p>
              <hr />
              <h3 className='mb-4'>$ {pizza.price.toLocaleString('es-CL')}</h3>
              <button className='btn btn-primary'>Añadir al carrito</button>
            </div>                   
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Pizza;