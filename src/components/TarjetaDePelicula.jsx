import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TarjetaDePelicula.css';

function TarjetaDePelicula() {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/peliculas/${id}`)
            .then(response =>{
                console.log(response.data);
                setPelicula(response.data)
            } )
            .catch(error => console.error('error al obtener la pelicula:', error));
    }, [id]);

    if (!pelicula) return <p>Cargando...</p>
    return (
        <div className='tarjeta-pelicula-detalle'>
            <img></img>
            <h2>{pelicula.titulo}</h2>
            <p><strong>Genero: </strong>{pelicula.generos.map(genero => genero.nombre).join(', ')}</p>
            <p><strong>Director: </strong>{pelicula.directores.map(director => director.nombre).join(', ')}</p>
            <p><strong>Descripcion: </strong>{pelicula.descripcion}</p>
            <p><strong>Duracion: </strong>{pelicula.duracion}</p>
            <p><strong>Estreno: </strong>{pelicula.estreno}</p>

        </div>
    )
}
export default TarjetaDePelicula;