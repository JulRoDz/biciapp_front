// RecoveryLogic.js
import { useState } from 'react';

export const useRecoveryLogic = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Por favor, ingresa tu correo electrónico');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('El correo electrónico no es válido');
    } else {
      setError('');
      // Lógica para enviar el formulario
      console.log('Correo enviado:', email);
    }
  };

  return { email, setEmail, error, handleSubmit };
};
