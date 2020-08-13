import React from 'react';
import './stilo.css';


const DivisaBtc = (props) => {

    const { code, description, rate } = props;

    return (
        <tr>
            <td className="has-text-centered">{description}</td>
            <td className="has-text-centered">1 BTC = {code}</td>
            <td className="has-text-centered">{rate}</td>
        </tr>
    )
}


export default DivisaBtc;