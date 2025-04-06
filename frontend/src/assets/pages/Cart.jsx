import { useState } from 'react';
import pizzasCart from '../components/pizzasCart.js'

const Cart = () => {
  const [cart, setCart] = useState(pizzasCart);

  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );

  const eliminarPizza = (pizza) => {
    const listaFiltrada = cart.filter(el => el.name !== pizza.name)
    setCart(listaFiltrada)
  }

  const disminuirtCount = (pizza) => {
    const nuevoCart = [...cart] 
    const index = nuevoCart.findIndex(el => el.name === pizza.name)
    if(nuevoCart[index].count >= 2 ) {
      nuevoCart[index].count = nuevoCart[index].count - 1
      setCart(nuevoCart)
    } else if (nuevoCart[index].count <= 1)
      eliminarPizza(pizza)
  }

  const aumentarCount = (pizza) => {
    const nuevoCart = [...cart] 
    const index = nuevoCart.findIndex(el => el.name === pizza.name)
    nuevoCart[index].count = nuevoCart[index].count + 1
    setCart(nuevoCart)
  }

  return ( 
    <>
      <div className="container mt-5 pt-5">
        <h1 className='mb-3'>Detalles del pedido:</h1>
        <ul className="list-group mb-4">
          {
            cart.map((pizza, index) => (
              <li key={index} className="list-group-item">
                <div className='row'>
                  <div className='col-6 col-md-4'>
                    <img src={pizza.img} alt="pizza 1" className='w-50 img-fluid'/>
                  </div>
                  <div className='col-6 col-md-4 d-flex align-items-center'>
                    <span className='ms-3 fs-5'>{pizza.name}</span>
                  </div>
                  <div className='col-12 col-md-4 d-flex align-items-center mt-3 mt-md-0'>
                    <span className='fs-5 me-3'><b>${pizza.price * pizza.count}</b></span>
                    <button className='btn btn-outline-danger me-2' onClick={() => disminuirtCount(pizza)}>-</button>
                    <span className='fs-5 me-2'><b>{pizza.count}</b></span>
                    <button className='btn btn-outline-success' onClick={() => aumentarCount(pizza)}>+</button>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        
        <span className='fs-5 me-2'><b>Total: ${totalPrice.toLocaleString('es-CL')}</b></span> <br />
        <button className='btn btn-dark mt-3 px-5'>Pagar</button>
      </div>
    </>
   );
}
 
export default Cart;