import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { ChevronDown, ChevronUp, User, Map, MapPin, Route, AlertTriangle, Bike, Package, LogOut, X, Headphones } from 'lucide-react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMapExpanded, setIsMapExpanded] = useState(true);
    const [username, setUsername] = useState('Usuario');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const user = null;
                setUsername(user?.name || 'Usuario');
            } catch (error) {
                console.error("Error fetching username:", error);
            }
        };

        fetchUsername();
    }, []);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setMenuOpen(false);
        }
    };

    return (
        <div className="header">
            <button className="toggle-menu-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="user-options">
                <FontAwesomeIcon icon={faUser} onClick={() => window.location.href = "/Profile"} />
                <p>Hola, <a href="/Profile">{username}</a></p>
            </div>

            {menuOpen && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <div className="menu-content">
                        <div className="menu-header">
                            <div className="menu-title">
                                <img src={Logo} alt="Logo" className="overlay-logo" />
                            </div>
                            <button className="close-button" onClick={toggleMenu}>
                                <X className="icon" />
                            </button>
                        </div>

                        <nav className="menu-navigation">
                            <ul className="menu-list">
                                <li>
                                    <button
                                        onClick={() => setIsMapExpanded(!isMapExpanded)}
                                        className="menu-item map-toggle-button"
                                    >
                                        <div className="menu-item-content">
                                            <Map className="icon" />
                                            <span>Mapa</span>
                                        </div>
                                        {isMapExpanded ? <ChevronUp className="icon" /> : <ChevronDown className="icon" />}
                                    </button>
                                    {isMapExpanded && (
                                        <ul className="submenu">
                                            <li>
                                                <a href="#" className="submenu-item" onClick={() => window.location.href = "/map"}>
                                                    <MapPin className="icon" />
                                                    <span>Principal</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="submenu-item">
                                                    <Route className="icon" />
                                                    <span>Rutas</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="submenu-item">
                                                    <AlertTriangle className="icon" />
                                                    <span>Zonas de Riesgo</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="submenu-item">
                                                    <Bike className="icon" />
                                                    <span>Parqueaderos</span>
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <a href="#" className="menu-item">
                                        <Package className="icon" />
                                        <span>Productos y Servicios</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="menu-item" onClick={() => window.location.href = "/profile"}>
                                        <User className="icon" />
                                        <span>Perfil</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="menu-footer">
                            <div className="footer-content">
                                <a href="#" className="menu-item" onClick={() => window.location.href = "/"}>
                                    <LogOut className="icon" />
                                    <span>Salir</span>
                                </a>
                                <button className="footer-button">
                                    <Headphones className="icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;