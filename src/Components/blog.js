import React from 'react';
import './stilo.css';

const Valor = (props) => {

    const { titulo, imagen, descripcion, link } = props;

    return (

                    <div className="column is-one-quarter">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={imagen} alt={titulo} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4 has-text-centered">{titulo}</p>
                                        <p className="subtitle is-6">{descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href={link} className="card-footer-item">Revisa el Árticulo completo aquí</a>
                        </footer>
                    </div>

    )
}


export default Valor;