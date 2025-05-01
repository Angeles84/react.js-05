import { useContext } from 'react';
//import pizzasCart from '../components/pizzasCart.js'
import { CartContext } from '../context/CartContext.jsx';
import { UserContext } from '../context/UserContext.jsx';
import pagado from '../img/pago-exitoso.gif'
import './pages.css' 

const Cart = () => {
  const { cart, totalPrice, disminuirtCount, aumentarCount, cartCheckout, checkoutSuccess} = useContext(CartContext);
  const { isLogged } = useContext(UserContext);


  const pagarCarrito = async () => {
    await cartCheckout();
  }

  return ( 
    <>
      <div className="container my-5 py-5">
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
                    <span className='fs-5 me-3'><b>${(pizza.price * pizza.count).toLocaleString('es-CL')}</b></span>
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
        
        <span className='fs-5 me-2'><b>Total: ${totalPrice && totalPrice.toLocaleString('es-CL')}</b></span> <br />
        <button className={ isLogged && cart.length > 0 ? 'btn btn-dark mt-3 px-5' : 'btn btn-dark mt-3 px-5 disabled'} onClick={() => pagarCarrito()}>Pagar</button>
        
        {checkoutSuccess && <div className='text-center'><img src={pagado} alt="" className="img-fluid ancho-img"/></div>}

      </div>
    </>
   );
}
 
export default Cart;