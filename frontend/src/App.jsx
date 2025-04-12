
import { Route, Routes } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './assets/components/Navbar'
import Footer from './assets/components/Footer';
import Pizza from './assets/pages/Pizza';
import Home from './assets/pages/Home';
import Cart from './assets/pages/Cart';
import Register from './assets/pages/Register';
import Login from './assets/pages/Login';
import Profile from "./assets/pages/Profile";
import NotFound from "./assets/pages/NotFound";
import CartProvider from "./assets/context/CartContext";

function App() {

  return (
    <>
      <CartProvider>
      <NavBar/>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login/>}
        >
        </Route>
        <Route
          path="/register"
          element={<Register />}
        >
        </Route>
        <Route
          path="/cart"
          element={<Cart/>}
        >
        </Route>
        <Route
          path="/pizza/p001"
          element={<Pizza/>}
        >
        </Route>
        
        <Route
          path="/profile"
          element={<Profile/>}
        >
        </Route>
        <Route
          path="*"
          element={<NotFound/>}
          >
        </Route>
        <Route
          path="/404"
          element={<NotFound/>}
        >
        </Route>
      </Routes>
      </CartProvider>
      <Footer/>
    </>
  )
}

export default App
