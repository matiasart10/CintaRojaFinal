import React, { useState, useEffect } from 'react';
import Section5 from '../Components/Section5';

import axios from 'axios';


const Dashboard = () => {


 
  const [producto, setProducto] = useState([]);

  const getProducto = () => {
    const URL = `https://devf-3e1b6.firebaseio.com/productos.json`;
    
    axios.get(URL)
      .then(respuesta => setProducto(Object.values(respuesta.data)))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getProducto();
  }, []);


  console.log(producto);

  return (
    <div>
      <Section5 />

      <br></br>
      <div className="container">
                <div className="columns is-multiline">
                    
                </div>
            </div>
      <br></br>
    </div>
  )
}

export default Dashboard;

