import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import './pages.css'
//import pizzas from '../components/pizzas.js'

import { useState, useEffect} from 'react'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    getData()
  }, []);

  const url = 'http://localhost:5000/api/pizzas';

  const getData = async () => {   
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data)
  }

  return ( 
    <>
      <Header/>
      <div className="container my-5 pb-5">
        <div className="row">
          {
            pizzas.map(pizza => (
              <div className="col-12 col-md-6 col-lg-4" key={pizza.name}>
                <CardPizza 
                  img={pizza.img}
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  desc={pizza.desc}
                  id={pizza.id}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
   );
}
 
export default Home;