import React from 'react';
import './stilo.css';


const ProductosBtc = (props) => {

    const { imagen, nombre, descripcion, precio } = props;

    return (
        <div className="column is-one-quarter">
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={imagen} alt={nombre} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <h2 className="title is-4">Valor ${precio}</h2>
                            <p className="title is-6">{nombre}</p>
                        </div>
                    </div>
                    <div className="content">
                        {descripcion}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductosBtc;