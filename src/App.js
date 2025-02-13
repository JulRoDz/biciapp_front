import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { RecoveryForm } from "./pages/RecoveryForm/RecoveryForm";
import { Register } from "./pages/Register/Register";
import Map from './pages/Map/Map';
import Profile from './pages/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/recoveryForm" element={<RecoveryForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/map" element={<Map />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    );
  }

export default App;
