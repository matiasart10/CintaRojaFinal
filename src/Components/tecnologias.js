import React, { Component } from 'react';
import './stilo.css';
import BitImg from '../i/bit.png';

class Tecnologias extends Component {
    render() {
        return (

            <div className="container">
                <h3 className="title is-3 has-text-centered">Aprendamos</h3>
                <div className="columns is-centered">
                    <div className="column is-half">
                        <img className="" src={BitImg} alt="home_webdeveloper_pic11" title="home_webdeveloper_pic11"
                            width="690" height="642" />
                    </div>
                </div>
            </div>

        )
    }

}

export default Tecnologias;