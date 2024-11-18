import React, { useState } from 'react'
import './register.css'

export default function Register() {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        console.log('El registro ha sido exitoso');

    }

    const handleUsernameInput = (e) => {
        setUser({ ...user, username: e.target.value });

    }

    const handlePasswordInput = (e) => {
        setUser({ ...user, password: e.target.value });
    }

    const handleEmaildInput = (e) => {
        setUser({ ...user, email: e.target.value });
    }

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Name: </label>
                <input type='text' id='username' onChange={handleUsernameInput} />

                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' onChange={handleEmaildInput} />


                <label htmlFor='password'>Contraseña: </label>
                <input type="password" id='password' onChange={handlePasswordInput} />

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

