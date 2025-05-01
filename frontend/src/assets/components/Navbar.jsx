import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from "react-router-dom";
import { CartContext } from '../context/CartContext.jsx';
import { UserContext } from '../context/UserContext.jsx';
import { useContext } from 'react';

const NavBar = () => {

  const { totalPrice, getQuantity } = useContext(CartContext);
  const { logout, isLogged } = useContext(UserContext);

  const setActiveClass = ({ isActive }) => (isActive ? "btn btn-outline-secondary mb-3 me-lg-3 mb-lg-0" : "btn btn-outline-light mb-3 me-lg-3 mb-lg-0");

  return ( 
    <>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary bg-dark">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>¡Pizzería Mamma Mía!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto py-3 py-lg-1">
            <NavLink
              to="/"
              className={ setActiveClass }
              >
              🏠 Home
            </NavLink>
              {isLogged ? 
                <>
                  <NavLink 
                    className={ setActiveClass }
                    to="/profile"
                  >
                    👩 Profile
                  </NavLink>
                  <Link to="/"><Button className='me-lg-2 mb-2 mb-lg-0' variant="outline-warning" onClick={() => logout()} >🚪Logout</Button></Link>
                </> : 
                <>
                  <NavLink 
                    className={ setActiveClass }
                    variant="outline-secondary" 
                    to="/login"
                  >
                    🔐 Login
                  </NavLink>
                  <NavLink 
                    className={ setActiveClass }
                    variant="outline-secondary"
                    to="/register"
                    >
                      🔐 Register
                  </NavLink>
                </>
              }
              <NavLink 
                className='btn btn-outline-info ms-lg-5'
                variant="outline-info" 
                to="/cart"
              >
                🛒 Total:  ${ totalPrice && totalPrice.toLocaleString('es-CL')} <sup>{ getQuantity() }</sup>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
   );
}
 
export default NavBar;