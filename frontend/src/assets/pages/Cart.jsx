import { useContext } from 'react';
//import pizzasCart from '../components/pizzasCart.js'
import { CartContext } from '../context/CartContext.jsx';


const Cart = () => {
  const { cart, totalPrice, disminuirtCount, aumentarCount } = useContext(CartContext);

  return ( 
    <>
      <div className="container mt-5 pt-5">
        <h1 className='mb-3'>Detalles del pedido:</h1>
        <ul className="list-group mb-4">
          {
            cart.length >= 1 ? 
            cart.map(pizza => (
              <li key={pizza.name} className="list-group-item">
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
            )) :
            <li className="list-group-item py-4">El carrito se encuentra vacío</li>
          }
        </ul>
        
        <span className='fs-5 me-2'><b>Total: ${totalPrice}</b></span> <br />
        <button className='btn btn-dark mt-3 px-5'>Pagar</button>
      </div>
   
    </>
   );
}
 
export default Cart;