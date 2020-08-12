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
      {divisa.map(divisa => {
        return (<DivisaBtc
          key={divisa.code}
          code={divisa.code}
          description={divisa.description}
          rate={divisa.rate}

        />)
      })}

    </div>
  )
}

export default Calculadora;

