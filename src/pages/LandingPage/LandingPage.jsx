import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Logo from '../../images/Logo.svg';

export function LandingPage() {
  return (
    <div className="landing-page">
      <img src={Logo} alt="LogoBiciApp" />
      <h1>Descubre el mundo en dos ruedas</h1>
      <p>Únete a nuestra comunidad de ciclistas y explora las mejores rutas para bicicletas en Bogotá.</p>
      <Link to="/login" className="btn">Iniciar Sesión</Link>
    </div>
  );
}
export default LandingPage;
