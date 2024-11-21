import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useUserContext } from "../providers/UserProvider";  
import { login } from "../apis/api"; 
import '../app/Login.css';
const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();  
  const { setUser } = useUserContext(); 

  const handleLogin = async () => {
    console.log('Credenciales antes de hacer login:', credentials);

    try {
      const response = await login(credentials);
      console.log('Respuesta del login:', response);
      setUser(response);
      navigate("/"); 
    } catch (error) {
      console.error('Error durante el login:', error);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  const handleRegister = () => {
    navigate('/register'); 
  };

  return (
    <div className="contenido">
      <div className="card-container">
     
        <div className="login-form">
          <h1>Iniciar Sesión</h1>
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
          <button onClick={handleLogin}>Iniciar Sesión</button>
          <button className="register-button" onClick={handleRegister}>Registrar</button>
        </div>
        
    
        <div className="login-image">
         
        </div>
      </div>
    </div>
  );
};

export default Login;
