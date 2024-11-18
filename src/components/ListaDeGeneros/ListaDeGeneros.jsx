import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ListaGeneros() {
    const [genero, setGenero] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/genero')
            .then(response => setGenero(response.data))
            .catch(error => console.error('Error al obtener las películas:', error));
    }, []);

    //renderizamos el contenido
    return (
        <div className="lista-genero">
            <h1>Lista de Generos</h1>
            <div className="red-genero">
                {genero.map(genero => (
                    <Link key={genero.id} to={`/genero/${genero.id}`}>
                        <div className="tarjeta-resumen">
                            <h3>{genero.nombre}</h3>
                            <p>{genero.pelicula}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )

}
export default ListaGeneros;
