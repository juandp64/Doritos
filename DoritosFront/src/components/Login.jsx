import React from 'react';
import '../styles/login.css';

export default function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" id="username" placeholder="Correo electrónico" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="password" placeholder="Contraseña" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>
      </form>
      <div className="register-link">
        <p>¿No tienes cuenta? <a href="#">Registrarse</a></p>
      </div>
    </div>
  );
}
