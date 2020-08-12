import React, { Component } from 'react';
import './stilo.css';

class Servicios extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-primary">
                                    <p className="title">¿Qué es Bitcoin?</p>
                                    <p className="subtitle">Bitcoin es una forma de moneda digital, creada y mantenida electrónicamente. Ninguna persona o institución lo controla.</p>
                                </article>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title">¿Cómo puedo comprar Bitcoin?</p>
                                    <p className="subtitle">Puede comprar bitcoins en intercambios regulados o directamente de otras personas que los vendan.</p>
                                </article>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-warning">
                                    <p className="title">¿Por qué utilizar Bitcoin?</p>
                                    <p className="subtitle">Porque es rápido, es barato de usar, es privado y los gobiernos centrales no se lo pueden quitar.</p>
                                </article>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-success">
                                    <p className="title">¿Cómo funcionan las transacciones de Bitcoin?</p>
                                    <p className="subtitle">Las transacciones de Bitcoin se envían desde y hacia carteras electrónicas de Bitcoin y se firman digitalmente por seguridad.</p>
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