import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [contrasenaError, setContrasenaError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del correo
    if (!correo || !correo.trim()) {
      setCorreoError("Por favor ingresa un correo válido");
      return;
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
      setCorreoError("Por favor ingresa un correo válido");
      return;
    }
    setCorreoError("");

    // Validación de la contraseña
    if (!contrasena || !contrasena.trim()) {
      setContrasenaError("Por favor ingresa una contraseña válida");
      return;
    }
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(contrasena)) {
      setContrasenaError(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
      );
      return;
    }
    setContrasenaError("");

    // Navegar al mapa si todo está bien
    navigate("/map");
  };

  return {
    correo,
    contrasena,
    correoError,
    contrasenaError,
    setCorreo,
    setContrasena,
    handleSubmit,
  };
};