import React, { useState } from "react";
import "./recoveryForm.css";
import Logo from './imagenes/Logo.svg';
import paswword1 from './imagenes/password 1.svg';

export function RecoveryForm() {
  const [correo, setCorreo] = useState("");
  const [codigo, setCodigo] = useState("");
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [estado, setEstado] = useState("correo"); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (estado === "correo") {
      console.log("Se ha enviado el correo:", correo);
      // Lógica para enviar el correo y cambiar el estado a "codigo"
      setEstado("codigo");
    } else if (estado === "codigo") {
      console.log("Código de verificación:", codigo);
      // Lógica para verificar el código y cambiar el estado a "contrasena"
      setEstado("contrasena");
    } else {
      console.log("Nueva contraseña:", password);
      // Lógica para actualizar la contraseña
    }
  };

  return (
    <div className="recovery-form">
      <div className="left-section">
        <h1>Bienvenido a BiciApp</h1>
        <p>
          {estado === "correo" && "¡Para brindarte nuestros servicios debes recuperar tu contraseña!"}
          {estado === "codigo" && "Ingrese el código de verificación"}
          {estado === "contrasena" && "Ingrese su nueva contraseña"}
        </p>
        <img src={paswword1} alt="PersonaEnCicla" />
      </div>
      <div className="right-section">
        <img src={Logo} alt="LogoBiciApp" />
        <h3>{estado === "correo" ? "Ingrese el correo con el que creó la cuenta" : "Ingrese el código de verificación"}</h3>
        <form onSubmit={handleSubmit}>
          {estado === "contrasena" ? (
            <>
              <label htmlFor="password">Nueva Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">Confirme Nueva Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </>
          ) : (
            <>
              <label htmlFor="campo">{estado === "correo" ? "Correo" : "Código de verificación"}</label>
              <input
                type="text"
                id="campo"
                name="campo"
                value={estado === "correo" ? correo : codigo}
                onChange={(e) => estado === "correo" ? setCorreo(e.target.value) : setCodigo(e.target.value)}
              />
            </>
          )}
          <button type="submit">{estado === "correo" ? "Enviar" : "Verificar"}</button>
          <a href="/" className="volver-link">Volver</a>
        </form>
      </div>
    </div>
  );
}
