import React, { Component } from 'react';
import './stilo.css';

class Interes extends Component {
    render() {
        return (
            <section className="section call-to-action has-text-centered PreFooter">
                <div className="container is-narrow">
                    <div className="box">
                        <div className="columns level">
                            <div className="column level-item">
                                <h1 className="title has-text-white">Saquemos cuenta</h1>
                            </div>
                            <div className="column level-item">
                                <p>¿Interesado en hacer cálculos? Revisa la calculadora.</p>
                            </div>
                            <div className="column level-item"><a className="has-text-white button is-primary is-outlined is-rounded is-medium"
                                href="/Calculadora">Hágamoslo</a></div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

}

export default Interes;