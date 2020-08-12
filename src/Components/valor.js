import React from 'react';
import './stilo.css';


const DivisaBtc = (props) => {

    const { code, description, rate } = props;

    return (
        <div className="column is-one-quarter">

            <h2 className="title is-3 has-text-black has-text-centered" >{code}</h2>
            <h2 className="title is-3 has-text-black has-text-centered" >{description}</h2>
            <h2 className="title is-3 has-text-black has-text-centered" >{rate}</h2>
        </div>
    )
}


export default DivisaBtc;