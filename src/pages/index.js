import React from 'react';
import Servicio from '../Components/servicios';
import Section2 from '../Components/section2';
import Tecnologias from '../Components/tecnologias';
import Interes from '../Components/interes';

const IndexPage = () => {
    return (
        <div>
            <Section2 />
            <br></br>
            <Tecnologias />
            <Servicio />
            <Interes />
        </div>
    );
}

export default IndexPage;
