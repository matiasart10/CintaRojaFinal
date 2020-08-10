import React, { useState, useEffect } from 'react';
import Section3 from '../Components/Section3';
import Valor from '../Components/valor';
import axios from 'axios';


const Calculadora = () => {

  const [divisa, setDivisa] = useState([]);

  const getDivisaValor = () => {
    const URL = 'https://api.coindesk.com/v1/bpi/currentprice/usd';
    axios.get(URL).then(respuesta => setDivisa(respuesta.data.bpi.USD)).catch(err => console.log(err));
  }

  useEffect(() => {
    getDivisaValor();
    //    console.log(divisa);

  })

  return (
    <section>
      <Section3 />
      <br></br>

      <Valor tipoDivisa={divisa.code} valorDivisa={divisa.rate_float}/>

    </section>
  )
}

export default Calculadora;
