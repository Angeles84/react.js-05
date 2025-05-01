import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/UserContext.jsx';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [errorVacio, setErrorVacio] = useState(null)
  const [errorPassworMoreSix, setPassworMoreSix] = useState(null)
  const {isLogged, login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!email.trim() || !password.trim() )   {
      setErrorVacio(true)
      return
    } else if ( password.trim().length < 6 ) {
      setPassworMoreSix(true)
      return
    } else if (!errorVacio && !errorPassworMoreSix) {
      const success = await login(email, password);
      console.log('logueado', success);
      setErrorVacio(false);
      setPassworMoreSix(false);
      setEmail('');
      setPassword('');
    }
  }

  if (isLogged) {
    <Navigate to="/" />;
  }

  return ( 
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block"></div>
          <div className="col-12 col-md-6">
            <h1 className="mb-4">Login</h1>
            { errorVacio && <p className="text-danger">Todos los campos son obligatorios</p> }
            { errorPassworMoreSix && <p className="text-danger">La contraseña debe tener al menos 6 caracteres</p> }
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="inputEmail">
                <Form.Label>Email (*)</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="name@example.com" 
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  />   
              </Form.Group>
              <Form.Group className="mb-3" controlId="inputPassword">
                <Form.Label>Contraseña (*)</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="******" 
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>
              <Button type="submit" className="px-5">Enviar</Button>
            </Form>
          </div>

        </div>
      </div>
    </>
   );
}
 
export default Login;