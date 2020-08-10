import React, { Component } from 'react';
import './stilo.css';

class Servicios extends Component {
    render() {
        return (
            <div className='Banner2'>
                <div className="container">
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-primary">
                                    <p className="title">Infraestructura</p>
                                    <p className="subtitle">Cloud-Computing-Web</p>
                                    <span className="icon is-large">
                                        <i className="fas fa-3x fa-server"></i>
                                    </span>
                                </article>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title">Comunicaciones</p>
                                    <p className="subtitle">PBX-Redes-Enlaces de Datos</p>
                                    <span className="icon is-large">
                                        <i className="fas fa-3x fa-sitemap"></i>
                                    </span>
                                </article>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-warning">
                                    <p className="title">Colaboración</p>
                                    <p className="subtitle">Correos - Dominios - Hosting</p>
                                    <span className="icon is-large">
                                        <i className="fas fa-3x fa-envelope-open"></i>
                                    </span>
                                </article>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-success">
                                    <p className="title">Desarrollo</p>
                                    <p className="subtitle">WEB-Api-BackEnd</p>
                                    <span className="icon is-large">
                                        <i className="fas fa-3x fa-code"></i>
                                    </span>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default Servicios;