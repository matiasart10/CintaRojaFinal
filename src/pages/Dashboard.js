import React, { useState, useEffect } from 'react';
import Section5 from '../Components/Section5';
import FormVentas from '../Components/ventas';

import axios from 'axios';

const Dashboard = () => {

  class UpdateForm {
    constructor(nombre, telefono, email, producto, entregado, id) {
      this[id] = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        producto: producto,
        entregado: entregado
      }
    }
  }

  const [ventas, setVentas] = useState([]);

  const getVentas = () => {
    const URL = `https://devf-3e1b6.firebaseio.com/form.json`;

    axios.get(URL)
      .then(respuesta => setVentas(respuesta.data))
      .catch(err => console.log(err));
  }

  const deleteVentas = (id) => {
    axios.delete(`https://devf-3e1b6.firebaseio.com/form/${id}.json`)
      .then(() => getVentas())
      .catch((error) => alert(error))
  }

  const URL2 = `https://devf-3e1b6.firebaseio.com/form.json`;
  const completeVentas = (nombre, telefono, email, producto, entregado, id) => {
    const listadoVentas = new UpdateForm(nombre, telefono, email, producto, entregado, id);
    axios.patch(URL2, listadoVentas)
      .then(() => getVentas())
      .catch((error) => alert(error))
  }

  useEffect(() => {
    getVentas();
  }, []);


  //console.log(ventas);

  return (
    <div>
      <Section5 />

      <br></br>
      <div className="container">
        <h2 className="title is-4 has-text-centered">Listado de Ventas</h2>
        <div className="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr className="is-selected">
                <th className=" has-text-centered">Nombre</th>
                <th className=" has-text-centered">Telefono</th>
                <th className=" has-text-centered">Email</th>
                <th className=" has-text-centered">Producto</th>
                <th className=" has-text-centered">Acción</th>
              </tr>
            </thead>
            <tbody>
              {ventas ? Object.keys(ventas).map((id) =>
                <FormVentas
                  key={id}
                  id={id}
                  nombre={ventas[id].nombre}
                  telefono={ventas[id].telefono}
                  email={ventas[id].email}
                  entregado={ventas[id].entregado}
                  producto={ventas[id].producto}
                  deleteVentas={deleteVentas}
                  completeVentas={completeVentas}

                />) : <tr>
                  <td className="has-text-centered">Sin Contenido</td>      
                  <td className="has-text-centered">Sin Contenido</td>  
                  <td className="has-text-centered">Sin Contenido</td>  
                  <td className="has-text-centered">Sin Contenido</td>  
                  <td className="has-text-centered">Sin Contenido</td>  
                  </tr>
              }

            </tbody>
          </table>
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default Dashboard;

