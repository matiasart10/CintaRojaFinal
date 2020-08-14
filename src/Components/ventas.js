import React from 'react';
import './stilo.css';


const FormVentas = (props) => {

    const { id, nombre, telefono, email, producto, entregado,  deleteVentas,  completeVentas } = props;

    return (
        <tr>
            <td className="has-text-centered">{nombre}</td>
            <td className="has-text-centered">{telefono}</td>
            <td className="has-text-centered">{email}</td>
            <td className="has-text-centered">{producto}</td>
            <td className="has-text-centered">{ entregado
                    ? <button className="button is-link is-danger" onClick={() => completeVentas(nombre, telefono, email, producto, false, id)}>Deshacer</button>
                    : <button className="button is-link is-green" onClick={() => completeVentas(nombre, telefono, email, producto, true, id)}>Completar</button> }
                      <button href="/" className="button is-link is-danger" onClick={() => deleteVentas(id)}>Eliminar</button>
                    </td>
        </tr>
    )
}


export default FormVentas;