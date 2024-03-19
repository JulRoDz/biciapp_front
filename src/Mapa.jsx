import React, { useState, useEffect } from "react";
import "./mapa.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faUser, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Logo from './imagenes/Logo.svg';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Mapa = () => {
  const [bikeShops, setBikeShops] = useState([]);
  const [filteredBikeShops, setFilteredBikeShops] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  const GOOGLE_MAPS_API_KEY = 'AIzaSyCWNwuy9yAt-Gx-NW8PPVOYcwNJYbsmCT4';

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
          },
          error => {
            console.error("Error obteniendo la ubicación: ", error);
          }
        );
      } else {
        console.error("Geolocalización no es soportada por este navegador");
      }
    };

    getCurrentLocation();
  }, []);

  const centerOnUserLocation = () => {
    if (mapInstance && currentLocation) {
      mapInstance.panTo(currentLocation);
    }
  };

  return (
    <div className="mapa">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="LogoBiciApp" />
        </div>
        <div className="options">
          <div className="menu">
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
        {currentLocation && (
          <LoadScript
            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              zoom={14}
              center={currentLocation}
              mapContainerStyle={{ height: "84vh", width: "100%" }}
              onLoad={map => setMapInstance(map)}
            >
              {filteredBikeShops.map((shop, index) => (
                <Marker
                  key={index}
                  position={{ lat: shop.lat, lng: shop.lng }}
                />
              ))}
              {/* Botón de centrar */}
              <button className="center-button" onClick={centerOnUserLocation}>
                <FontAwesomeIcon icon={faLocationArrow} />
              </button>
              {/* Botón de menú */}
              <div className="sandwich-button">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </GoogleMap>
          </LoadScript>
        )}
      </div>
    </div>
  );
}

export default Mapa;
