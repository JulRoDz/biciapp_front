import React, { useState } from "react";
import "./mapa.css";
import Logo from './imagenes/Logo.svg';
import PersonaCiclaColor from './imagenes/PersonaCiclaColor.svg';

export function Mapa() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se manejaría el inicio de sesión
  };

  return (
    <div className="login">
      <div className="left-section">
        <h1>SOY UN MAPA</h1>
        <p>Únete a nosotros para descubrir el mundo en dos ruedas.</p>
        <img src={PersonaCiclaColor} alt="PersonaEnCicla" />
      </div>
      <div className="right-section">
        <img src={Logo} alt="LogoBiciApp" />
        <h3>Ingrese los siguientes datos:</h3>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Iniciar sesión</button>
        </form>
        <a href="recoveryForm">¿Olvidaste tu contraseña?</a>
        <p>
          ¿No tienes una cuenta? <a href="register">Regístrate aquí</a>.
        </p>
      </div>
    </div>
  );
}
