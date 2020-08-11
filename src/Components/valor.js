import React from 'react';

import './stilo.css';



const Valor = (props) => {

    const { valorDivisa, tipoDivisa } = props;

    return (
        <section>
            <h1 className="title is-3 has-text-black has-text-centered ">Divisa Actual</h1>
            <h2 className="title is-3 has-text-black has-text-centered" >Modeda: {tipoDivisa}</h2>
            <h2 className="title is-3 has-text-black has-text-centered" >1 BTC = ${valorDivisa}</h2>
            
        </section>
    )
}


export default Valor;