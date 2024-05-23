import React, { useState, useEffect } from "react";
import "./Map.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../images/Logo.svg';
import Ubi  from '../../images/blue-circle.png';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Map = () => {
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
      const newZoom = 17;
      mapInstance.panTo(currentLocation);
      mapInstance.setZoom(newZoom);
    }
  };



  return (
    <div className="map">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="LogoBiciApp" />
        </div>
        <div className="options">
          <div className="menu">
          </div>
          <div className="greeting" >
            <FontAwesomeIcon icon={faUser} />
            <p>Hola,<a href="Profile">Usuario</a></p>
          </div>
        </div>
      </div>
      <div className="map-section">
        {currentLocation && (
          <LoadScript
            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              zoom={16}
              center={currentLocation}
              mapContainerStyle={{ height: "84vh", width: "100%" }}
              onLoad={map => setMapInstance(map)}
            >
              <Marker
                position={currentLocation}
                icon={{
                  url: Ubi
                }}
              />

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
};

export default Map;
