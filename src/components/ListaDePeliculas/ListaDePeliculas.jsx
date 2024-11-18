import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListaDePeliculas.css';


function ListaPeliculas() {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/peliculas')
            .then(response => setPeliculas(response.data))
            .catch(error => console.error('Error al obtener las películas:', error));
    }, []);

    //renderizamos el contenido
    return (
        <div className="lista-peliculas">
            <h1>Lista de Películas</h1>
            <div className="red-peliculas">
                {peliculas.map(pelicula => (
                    <Link key={pelicula.id} to={`/peliculas/${pelicula.id}`}>
                        <div className="tarjeta-resumen">
                            <h3>{pelicula.titulo}</h3>
                            <p>{pelicula.genero}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )

}
export default ListaPeliculas;
