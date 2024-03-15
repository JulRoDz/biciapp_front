import React from "react";
import "./mapa.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from './imagenes/Logo.svg';

export function Mapa() {
  const handleMenuClick = () => {
    // Aquí puedes manejar la lógica para abrir el menú
  };

  return (
    <div className="mapa">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="LogoBiciApp" />
        </div>
        <div className="options">
          <div className="menu" onClick={handleMenuClick}>
            {/* Agrega más elementos aquí */}
            <FontAwesomeIcon icon={faCog} />
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="greeting">
            <FontAwesomeIcon icon={faUser} />
            <p>Hola, Usuario</p>
          </div>
        </div>
      </div>
      <div className="map-section">
        {/* Aquí puedes colocar el contenido relacionado con el mapa */}
      </div>
      <div className="sandwich-button">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}
