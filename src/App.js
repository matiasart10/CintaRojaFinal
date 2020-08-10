import React from 'react';
import Nav from './Components/nav';
import Servicio from './Components/servicios';
import Section2 from './Components/section2';
import Tecnologias from './Components/tecnologias';
import Contacto from './Components/contacto';
import Footer from './Components/footer';


function App() {
  return (
    <section>
      <Nav/>
      <Section2/>
      <br></br>
      <Tecnologias/>
      <Servicio/>
      <Contacto/>
      <Footer/>
    </section>
  );
}

export default App;

