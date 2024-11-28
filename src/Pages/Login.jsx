// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import { login } from "../apis/api";
import "../app/Login.css"; // Your existing CSS

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isActive, setIsActive] = useState(false); // To toggle between login and register
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const handleLogin = async () => {
    try {
      const response = await login(credentials);
      setUser(response);
      navigate("/"); // Redirect after login
    } catch (error) {
      alert("Error al iniciar sesión.");
    }
  };

  const handleRegister = () => {
    setIsActive(true);
     // Show the registration form
  };

  const handleBackToLogin = () => {
    setIsActive(false); // Show the login form
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      <div className="form-box login">
        <h1>Bienvenido de nuevo</h1>
        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button onClick={handleLogin} className="btn">Iniciar sesión</button>
        <button className="register-btn" onClick={handleRegister}>Registrarse</button>
      </div>

      <div className="form-box register">
        <h1>Registrarse</h1>
        <input
          type="text"
          placeholder="Nombre completo"
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nombre de Usuario"
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button className="login-btn" onClick={handleBackToLogin}>Volver al Login</button>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>¡Hola, Bienvenido!</h1>
          <p>No tienes una cuenta?</p>
          <button className="btn" onClick={handleRegister}>Registrarse</button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>¡Bienvenido de vuelta!</h1>
          <p>¿Ya tienes una cuenta?</p>
          <button className="btn" onClick={handleBackToLogin}>Iniciar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
