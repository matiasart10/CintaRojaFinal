import React, { useState, useEffect } from 'react';
import Section3 from '../Components/Section3';
import DivisaBtc from '../Components/valor';
import axios from 'axios';


const Calculadora = () => {


  const [divisa, setDivisa] = useState([]);

  const getDivisaValor = () => {
    const URL = `https://api.coindesk.com/v2/bpi/currentprice.json`;
    axios.get(URL)
      .then(respuesta => setDivisa(Object.values(respuesta.data.bpi)))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getDivisaValor();
  }, []);

  console.log(divisa);

  return (
    <div>
      <Section3 />
      <br></br>
      <div className="container">
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
    </div>
  )
}

export default Calculadora;

