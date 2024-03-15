import React, { useState } from "react";
import "./login.css";
import Logo from './imagenes/Logo.svg';
import PersonaCiclaColor from './imagenes/PersonaCiclaColor.svg';

export function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [contrasenaError, setContrasenaError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!correo || !correo.trim()) {
      setCorreoError("Por favor ingresa un correo válido");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
      setCorreoError("Por favor ingresa un correo válido");
      return;
    }
    if (!contrasena || !contrasena.trim()) {
      setContrasenaError("Por favor ingresa una contraseña válida");
      return;
    }
    if (contrasena.length < 6) {
      setContrasenaError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    // Aquí se manejaría el inicio de sesión
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
    setCorreoError("");
  };

  const handleContrasenaChange = (e) => {
    setContrasena(e.target.value);
    setContrasenaError("");
  };

  return (
    <div className="login">
      <div className="left-section" style={{ display: window.innerWidth <= 768 ? 'none' : 'flex' }}>
        <h1>Bienvenido a BiciApp</h1>
        <p>Únete a nosotros para descubrir el mundo en dos ruedas.</p>
        <img src={PersonaCiclaColor} alt="PersonaEnCicla" />
      </div>
      <div className="right-section">
        <div className="content">
          <img src={Logo} alt="LogoBiciApp" />
          <h3>Ingrese los siguientes datos:</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={correo}
              onChange={handleCorreoChange}
              required
              title="Por favor ingresa un correo electrónico válido"
            />
            {correoError && <p className="error">{correoError}</p>}
            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={contrasena}
              onChange={handleContrasenaChange}
            />
            {contrasenaError && <p className="error">{contrasenaError}</p>}
            <button type="submit">Iniciar sesión</button>
          </form>
          <a href="recoveryForm">¿Olvidaste tu contraseña?</a>
          <p>
            ¿No tienes una cuenta? <a href="register">Regístrate aquí</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
