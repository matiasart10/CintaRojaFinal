import React, { Component } from 'react';
import '../Components/stilo.css';


class About extends Component {
  render() {
    return (

      <section className="hero is-medium Banner">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-white">
              Usa la calculadora
              </h1>
            <h2 className="title is-2 has-text-white">para conocer la diferencia en USD</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default About;