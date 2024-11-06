import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListaDeDirectores() {
    const [directores, setDirectores] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/directores')
            .then(response => setDirectores(response.data))
            .catch(error => console.error('Error al obtener los directores:', error))
    }, []);

    //renderizamos
    return (
        <div className='lista-directores'>
            <h1>Lista De Directores</h1>
            <div className='red-directores'>
                {directores.map(directores => (
                    <Link key={directores.id} to={`/directores/${directores.id}`}>
                        <div className="tarjeta-resumen">
                            <h3>{directores.nombre}</h3>
                            <p>{directores.nacionalidad}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )

}
export default ListaDeDirectores;