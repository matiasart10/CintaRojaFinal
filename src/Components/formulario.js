import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stilo.css';


const Formulario = (props) => {

    const { createForm } = props;

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [producto, setProducto] = useState('');


    const inputNombre = (input) => {
        console.log(input.target.value);
        setNombre(input.target.value);
    }

    const inputTelefono = (input) => {
        setTelefono(input.target.value);
    }

    const inputEmail = (input) => {
        setEmail(input.target.value);
    }

    const inputProducto = (input) => {
        setProducto(input.target.value);
    }

    return (
        <div className="columns">
            <div className="column is-one-quarter">
                <div className="field">
                    <label className="label">Nombre</label>
                    <div className="control">
                        <input onChange={inputNombre} className="input" type="text" placeholder="Coloque su Nombre aqui" required/>
                    </div>
                </div>
            </div>
            <div className="column is-one-quarter">
                <div className="field">
                    <label className="label">Telefono</label>
                    <div className="control">
                        <input onChange={inputTelefono} className="input" type="text" placeholder="Coloque su Telefono aqui" />
                    </div>
                </div>
            </div>
            <div className="column is-one-quarter">
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input onChange={inputEmail} className="input" type="text" placeholder="@ su Email aqui" />
                    </div>
                </div>
            </div>
            <div className="column is-one-quarter">
                <div className="field">
                    <label className="label">Productos</label>
                    <div className="control">
                        <div className="select">
                            <select onChange={inputProducto}>
                                <option>Academia Cryto 3 meses</option>
                                <option>Academia Cryto 6 meses</option>
                                <option>Academia Cryto 9 meses</option>
                                <option>Academia Cryto 12 meses</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-one-quarter">
                <div className="field is-grouped">
                    <div className="control">
                        <button onClick={() => { createForm(nombre, telefono, email, producto) }} className="button is-link">Solicitar</button>
                    </div>
                    <div className="control">
                        <Link to='/'>
                            <button className="button is-link is-danger">Cancelar</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Formulario;



