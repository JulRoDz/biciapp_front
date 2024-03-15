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
  const [errors, setErrors] = useState({}); // Estado para almacenar errores de validación

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Restablecer errores al enviar el formulario

    if (estado === "correo") {
      // Validación del correo electrónico
      if (!correo.includes("@")) {
        setErrors({ correo: "Por favor ingresa un correo electrónico válido" });
        return;
      }

      console.log("Se ha enviado el correo:", correo);
      // Lógica para enviar el correo y cambiar el estado a "codigo"
      setEstado("codigo");
    } else if (estado === "codigo") {
      console.log("Código de verificación:", codigo);
      // Lógica para verificar el código y cambiar el estado a "contrasena"
      setEstado("contrasena");
    } else {
      // Validación de la contraseña
      if (password.length < 6) {
        setErrors({ password: "La contraseña debe tener al menos 6 caracteres" });
        return;
      }

      // Validación de la confirmación de contraseña
      if (password !== confirmPassword) {
        setErrors({ confirmPassword: "Las contraseñas no coinciden" });
        return;
      }

      console.log("Nueva contraseña:", password);
      // Lógica para actualizar la contraseña
    }
  };

  return (
    <div className="recovery-form">
      <div className="left-section" style={{ display: window.innerWidth <= 768 ? 'none' : 'flex' }}>
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
              {errors.password && <p className="error-message">{errors.password}</p>} {/* Mostrar mensaje de error */}
              <label htmlFor="confirmPassword">Confirme Nueva Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>} {/* Mostrar mensaje de error */}
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
                pattern={estado === "correo" ? "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" : "\\d{6}"}
                required
                title={estado === "correo" ? "Por favor ingresa un correo electrónico válido" : "El código debe tener 6 dígitos"}
            />

              {errors.correo && <p className="error-message">{errors.correo}</p>} {/* Mostrar mensaje de error */}
            </>
          )}
          <button type="submit">{estado === "correo" ? "Enviar" : "Verificar"}</button>
          <a href="/" className="volver-link">Volver</a>
        </form>
      </div>
    </div>
  );
}
