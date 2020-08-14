import React, { useState, useEffect } from 'react';
import Section3 from '../Components/Section3';
import DivisaBtc from '../Components/valor';
import ProductosBtc from '../Components/productos';
import FormBtc from '../Components/formulario';
import { useHistory } from 'react-router-dom';
import Interes2 from '../Components/interes2';
import axios from 'axios';


const Calculadora = (props) => {


  const [divisa, setDivisa] = useState([]);
  const [producto, setProducto] = useState([]);

  const getDivisaValor = () => {
    const URL = `https://api.coindesk.com/v2/bpi/currentprice.json`;

    axios.get(URL)
      .then(respuesta => setDivisa(Object.values(respuesta.data.bpi)))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getDivisaValor();
  }, []);

  const getProducto = () => {
    const URL = `https://devf-3e1b6.firebaseio.com/productos.json`;

    axios.get(URL)
      .then(respuesta => setProducto(Object.values(respuesta.data)))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getProducto();
  }, []);


  console.log(divisa);
  console.log(producto);

  const history = useHistory();

    const createForm = (nombre, telefono, email, producto) => {
        const URL = 'https://devf-3e1b6.firebaseio.com/form.json';

        let newForm = {nombre: nombre, telefono: telefono, email: email, producto: producto, entregado: false } ;
        axios.post(URL, newForm)
            .then((res) => history.push('/'))
            .catch(error => console.log(error));
    }


  return (
    <div>
      <Section3 />
      <br></br>
      <div className="container">
        <h2 className="title is-4 has-text-centered">Revisa la tabla de Conversión</h2>
        <div className="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr className="is-selected">
                <th className=" has-text-centered">Descripcion</th>
                <th className=" has-text-centered">Divisa</th>
                <th className=" has-text-centered">Valor</th>
              </tr>
            </thead>
            <tbody>
              {divisa.map(divisa => {
                return (<DivisaBtc
                  key={divisa.code}
                  description={divisa.description}
                  code={divisa.code}
                  rate={Number.parseInt(divisa.rate_float)}
                />)
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
      <div className="container">
        <h2 className="title is-4 has-text-centered">Consulta nuestros Cursos</h2>
        <div className="columns is-multiline">
          {
            producto.map(producto => {
              return (<ProductosBtc
                key={producto.sku}
                imagen={producto.imagen}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
              />)
            })}
        </div>
      </div>
      <br></br>
      <h2 className="title is-4 has-text-centered">Formulario de Compra</h2>
      <br></br>
      <section className="container">
      <FormBtc createForm={createForm}/>
      </section>
      <br></br>
      <Interes2 />
    </div>
  )
}

export default Calculadora;

