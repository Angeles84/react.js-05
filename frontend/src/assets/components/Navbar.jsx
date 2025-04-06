import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const NavBar = () => {
  const total = 25000;
  const token = false;

  return ( 
    <>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary bg-dark">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>¡Pizzería Mamma Mía!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto py-3 py-lg-1">
            <Link
              to="/"
              className="btn btn-outline-light me-lg-3 mb-2 mb-lg-0"
              >
              Home
            </Link>
              {token ? 
                <>
                  <Link 
                    className='btn btn-outline-light me-lg-3 mb-2 mb-lg-0' 
                    to="/profile"
                  >
                    👩Profile
                  </Link>
                  <Button className='me-lg-2 mb-2 mb-lg-0' variant="outline-secondary" href="#pricing">🚪Logout</Button>
                </> : 
                <>
                  <Link 
                    className='btn btn-outline-light me-lg-3 mb-2 mb-lg-0' 
                    variant="outline-secondary" 
                    to="/login"
                  >
                    🔐Login
                  </Link>
                  <Link 
                    className='btn btn-outline-light me-lg-5 mb-2 mb-lg-0' 
                    variant="outline-secondary"
                    to="/register"
                    >
                      🔐Register
                  </Link>
                </>
              }
              <Link 
                className='btn btn-outline-info ms-lg-5'
                variant="outline-info" 
                to="/cart"
              >
                🛒Total: ${total.toLocaleString('es-CL')}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
   );
}
 
export default NavBar;