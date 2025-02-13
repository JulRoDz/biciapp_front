import React, { useState, useEffect } from "react";
import "./Map.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { GoogleMap, LoadScript } from '@react-google-maps/api'; // Eliminamos Marker
import Header from '../../components/Header/Header';

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [watchId, setWatchId] = useState(null);

  const GOOGLE_MAPS_API_KEY = 'AIzaSyCWNwuy9yAt-Gx-NW8PPVOYcwNJYbsmCT4';

  useEffect(() => {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const location = { lat: latitude, lng: longitude };
          setCurrentLocation(location);
          console.log("Ubicación actualizada:", location);
        },
        error => {
          console.error("Error obteniendo la ubicación:", error);
        },
        {
          enableHighAccuracy: true, // Mayor precisión
          maximumAge: 0, // No usar caché
          timeout: 5000 // Espera máxima antes de fallar
        }
      );

      setWatchId(id);
    } else {
      console.error("Geolocalización no es soportada por este navegador");
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const centerOnUserLocation = () => {
    if (mapInstance && currentLocation) {
      console.log("Centrando en:", currentLocation);
      mapInstance.panTo(currentLocation);
      mapInstance.setZoom(17);
    }
  };

  return (
    <div className="map">
      <Header />

      <div className="map-section">
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            zoom={16}
            center={currentLocation || { lat: 0, lng: 0 }} // Ubicación predeterminada si no hay datos aún
            mapContainerStyle={{
              height: "calc(100vh - 60px)",
              width: "100%",
              margin: "0 auto"
            }}
            mapTypeId="hybrid"
            options={{
              mapTypeId: "hybrid",
              mapTypeControl: true,
              zoomControl: true,
              fullscreenControl: false
            }}
            onLoad={map => setMapInstance(map)}
          >
            {/* No renderizamos el Marker */}
          </GoogleMap>
        </LoadScript>

        {/* Botón para centrar el mapa en la ubicación */}
        {currentLocation && (
          <button className="center-button" onClick={centerOnUserLocation}>
            <FontAwesomeIcon icon={faLocationArrow} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Map;