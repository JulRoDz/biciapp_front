import React, { useState } from "react";
import "./register.css";
import Logo from './imagenes/Logo.svg';
import PersonaCiclaColor from './imagenes/PersonaCiclaColor.svg';

export function Register() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const handleSubmit = (e) => {
        
    e.preventDefault();
    // Aquí se manejaría el registro
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
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmarContrasena"
          name="confirmarContrasena"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
        />
          <button type="submit">Registrarse</button>
      </form>
        <p>
        ¿Ya tienes una cuenta? <a href="/">Iniciar sesión aquí</a>.
        </p>
      </div>
    </div>
  );
}
