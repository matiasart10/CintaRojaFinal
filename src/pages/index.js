import React from "react";
import Servicio from '../Components/servicios';
import Section2 from '../Components/section2';
import Tecnologias from '../Components/tecnologias';
import Interes from '../Components/interes';

const IndexPage = () => {
    return (
        <section>
            <Section2 />
            <br></br>
            <Tecnologias />
            <Servicio />
            <Interes />
        </section>
    );
}

export default IndexPage;
