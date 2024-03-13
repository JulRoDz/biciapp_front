import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Login } from "./Login";
import { RecoveryForm } from "./RecoveryForm";
import { Register } from "./Register";
import { Mapa } from "./Mapa";


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/recoveryForm" element={<RecoveryForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </Router>
    );
  }

export default App;
