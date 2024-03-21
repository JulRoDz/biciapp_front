import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Logo from './imagenes/Logo.svg';
import PersonaCiclaColor from './imagenes/PersonaCiclaColor.svg';

export function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [contrasenaError, setContrasenaError] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!correo || !correo.trim()) {
      setCorreoError("Por favor ingresa un correo válido");
      return;
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
      setCorreoError("Por favor ingresa un correo válido");
      return;
    }
    setCorreoError(""); // Resetear el error si es válido

    // Validar la contraseña
    if (!contrasena || !contrasena.trim()) {
      setContrasenaError("Por favor ingresa una contraseña válida");
      return;
    }
    if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(contrasena)
    ) {
      setContrasenaError(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
      );
      return;
    }
    setContrasenaError(""); // Resetear el error si es válida

    // Aquí se manejaría el inicio de sesión
    
    // Redirigir a /mapa
    navigate("/mapa");
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value); // Actualizar el estado del correo
    setCorreoError(""); // Resetear el error del correo
  };

  const handleContrasenaChange = (e) => {
    setContrasena(e.target.value); // Actualizar el estado de la contraseña
    setContrasenaError(""); // Resetear el error de la contraseña
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
              onChange={handleCorreoChange} // Manejar el cambio en el correo
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
              onChange={handleContrasenaChange} // Manejar el cambio en la contraseña
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