import React, { useState } from "react";
import "./register.css";
import Logo from './imagenes/Logo.svg';
import PersonaCiclaColor from './imagenes/PersonaCiclaColor.svg';

export function Register() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const [errores, setErrores] = useState({});

    const validarCorreo = (correo) => {
        return /\S+@\S+\.\S+/.test(correo);
    };

    const validarContrasena = (contrasena) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(contrasena);
    };

    const validarNombre = (nombre) => {
        return /^[a-zA-Z\s]+$/.test(nombre);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevosErrores = {};

        if (!nombre.trim()) {
            nuevosErrores.nombre = "Por favor ingresa tu nombre";
        } else if (!validarNombre(nombre)) {
            nuevosErrores.nombre = "El nombre solo puede contener letras";
        }

        if (!correo.trim()) {
            nuevosErrores.correo = "Por favor ingresa tu correo electrónico";
        } else if (!validarCorreo(correo)) {
            nuevosErrores.correo = "Por favor ingresa un correo electrónico válido";
        }

        if (!contrasena.trim()) {
            nuevosErrores.contrasena = "Por favor ingresa una contraseña";
        } else if (!validarContrasena(contrasena)) {
            nuevosErrores.contrasena = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial";
        }

        if (contrasena !== confirmarContrasena) {
            nuevosErrores.confirmarContrasena = "Las contraseñas no coinciden";
        }

        if (Object.keys(nuevosErrores).length === 0) {
            // Aquí se manejaría el registro si no hay errores
        } else {
            setErrores(nuevosErrores);
        }
    };

    const handleContrasenaChange = (e) => {
        setContrasena(e.target.value);
        if (errores.contrasena) {
            setErrores((prevErrores) => {
                return { ...prevErrores, contrasena: "" };
            });
        }
    };

    const handleConfirmarContrasenaChange = (e) => {
        setConfirmarContrasena(e.target.value);
        if (errores.confirmarContrasena) {
            setErrores((prevErrores) => {
                return { ...prevErrores, confirmarContrasena: "" };
            });
        }
    };

    return (
        <div className="register">
            <div className="left-section" style={{ display: window.innerWidth <= 768 ? 'none' : 'flex' }}>
                <h1>Bienvenido a BiciApp</h1>
                <p>Únete a nosotros para descubrir el mundo en dos ruedas.</p>
                <img src={PersonaCiclaColor} alt="PersonaEnCicla" />
            </div>
            <div className="right-section">
                <img src={Logo} alt="LogoBiciApp" />
                <h3>Ingrese los siguientes datos:</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    {errores.nombre && <p className="error">{errores.nombre}</p>}
                    <label htmlFor="correo">Correo</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    {errores.correo && <p className="error">{errores.correo}</p>}
                    <label htmlFor="contrasena">Contraseña</label>
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        value={contrasena}
                        onChange={handleContrasenaChange}
                    />
                    {errores.contrasena && <p className="error">{errores.contrasena}</p>}
                    <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="confirmarContrasena"
                        name="confirmarContrasena"
                        value={confirmarContrasena}
                        onChange={handleConfirmarContrasenaChange}
                    />
                    {errores.confirmarContrasena && <p className="error">{errores.confirmarContrasena}</p>}
                    <button type="submit">Registrarse</button>
                </form>
                <p>
                    ¿Ya tienes una cuenta? <a href="/">Iniciar sesión aquí</a>.
                </p>
            </div>
        </div>
    );
}
