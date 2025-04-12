import { createContext, useState } from "react";
//import pizzasCart from '../components/pizzasCart.js'

export const CartContext = createContext();

const CartProvider  = ({ children }) => {
  const [cart, setCart] = useState([]);

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
  
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = cart.findIndex((p) => p.name === name);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      cart[productoEcontradoIndex].count++;
      setCart([...cart]);
    } else {
      setCart([...cart, producto]);
    }
  };

  const getQuantity = () => cart.reduce((total, pizza) => total + pizza.count, 0);

  return ( 
    <CartContext.Provider value={{cart, totalPrice, disminuirtCount, aumentarCount, getQuantity, addToCart }}>
      {children}
    </CartContext.Provider>
   );
}
 
export default CartProvider ;