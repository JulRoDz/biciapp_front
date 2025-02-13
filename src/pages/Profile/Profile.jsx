import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from '../../images/profile-pic.svg';
import Header from '../../components/Header/Header'; // Ajusta la ruta según tu estructura de carpetas


const Perfil = () => {

  return (
    <div className="perfil">
      <Header />
      <div className="profile-picture">
        <img src={ProfilePic} alt="Foto de perfil" />
        <div className="buttons">
          <button className="delete-button">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="upload-button">
            <FontAwesomeIcon icon={faUpload} />
          </button>
        </div>
      </div>
      <div className="user-info">
        <h2>Información del Usuario</h2>
        <div className="user-info-item">
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            className="user-info-input"
            defaultValue="Usuario"
          />
        </div>
        <div className="user-info-item">
          <label htmlFor="correo">Correo:</label>
          <input
            id="correo"
            type="email"
            className="user-info-input"
            defaultValue="usuario@example.com"
          />
        </div>
        <div className="user-info-item">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            id="telefono"
            type="tel"
            className="user-info-input"
            defaultValue="123-456-7890"
          />
        </div>
        <div className="user-info-item">
          <label htmlFor="departamento">Departamento:</label>
          <input
            id="departamento"
            type="text"
            className="user-info-input"
            defaultValue="Departamento"
          />
        </div>
        <div className="user-info-item">
          <label htmlFor="ciudad">Ciudad:</label>
          <input
            id="ciudad"
            type="text"
            className="user-info-input"
            defaultValue="Ciudad"
          />
        </div>
        <div className="user-info-item">
          <label htmlFor="direccion">Dirección:</label>
          <input
            id="direccion"
            type="text"
            className="user-info-input"
            defaultValue="Dirección"
          />
        </div>
      </div>
    </div>
  );
};

export default Perfil;
