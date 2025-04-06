import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPasword] = useState('');
  const [errorVacio, setErrorVacio] = useState(null)
  const [errorPasswordNotMacth, setPasswordNotMacth] = useState(null)
  const [errorPassworMoreSix, setPassworMoreSix] = useState(null)

  const validarInput = (e) => {
    e.preventDefault()
    if(!email.trim() || !password.trim() || !repeatPassword.trim() )   {
      setErrorVacio(true)
      return
    } else if (password.trim() != repeatPassword.trim() ){
      setPasswordNotMacth(true)
      return
    } else if ( password.trim().length < 6 ) {
      setPassworMoreSix(true)
      return
    }
    setErrorVacio(false);
    setPasswordNotMacth(false);
    setPassworMoreSix(false);
    setEmail('');
    setPassword('');
    setRepeatPasword('');
  }

  return ( 
    <>
      <div className="container mt-5 pt-5">
        <h1 className="mb-4">Register</h1>
        { errorVacio && <p className="text-danger">Todos los campos son obligatorios</p> }
        { errorPasswordNotMacth && <p className="text-danger">La contraseñas deben ser iguales</p> }
        { errorPassworMoreSix && <p className="text-danger">La contraseña debe tener al menos 6 caracteres</p> }
        { errorVacio === false && errorPasswordNotMacth === false && errorPassworMoreSix === false ? <p className="text-success">Los datos han sido enviados correctamente!</p> : null }
        <Form onSubmit={validarInput}>
          <Form.Group className="mb-3" controlId="inputEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="name@example.com" 
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />   
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="******" 
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputRepeatPassword">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="******" 
              name="password"
              onChange={(e) => setRepeatPasword(e.target.value)}
              value={repeatPassword}
            />
          </Form.Group>
          <Button type="submit" className="px-5">Enviar</Button>
        </Form>
      </div>
    </>
   );
}
 
export default Register;