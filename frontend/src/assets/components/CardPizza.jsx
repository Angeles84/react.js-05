import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const CardPizza = ({name, price, ingredients, img, id}) => {

  const { addToCart } = useContext(CartContext)
  const pizza = { name, ingredients, price, img, id };

  return ( 
    <>
      <Card className='mb-4'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name} 🍕</Card.Title>
          <hr />
          <Card.Subtitle className="text-muted mb-2">Ingredientes:</Card.Subtitle>
          <ul>
            {
              ingredients.map( (item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
          <hr />
          <h5 className='text-center mb-3'>Precio: ${price.toLocaleString('es-CL')}</h5>
          <div className='d-flex justify-content-between'>
            <Link to={`/pizza/${id}`}><Button variant='outline-secondary' >Ver más 👀</Button></Link>
            <Button variant="dark" onClick={() => addToCart(pizza)}>Añadir 🛒</Button>
          </div>
       </Card.Body>
      </Card>
    </>
  );
}
 
export default CardPizza;