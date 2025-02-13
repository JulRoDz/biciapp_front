import React from "react";
import { useLogin } from "./loginLogic";
import "./Login.css";
import Logo from '../../images/Logo.svg';

export function Login() {
  const { correo, contrasena, correoError, contrasenaError, setCorreo, setContrasena, handleSubmit } = useLogin();

  return (
    <div className="login">
      <img src={Logo} alt="LogoBiciApp" />
      <h3>Iniciar sesión</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        {correoError && <p className="error">{correoError}</p>}
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        {contrasenaError && <p className="error">{contrasenaError}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
      <a href="/recoveryForm">¿Olvidaste tu contraseña?</a>
      <p>
        ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>.
      </p>
    </div>
  );
}
export default Login;