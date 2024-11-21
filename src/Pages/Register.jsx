import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registro } from "../apis/api";
import '../app/Register.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    nombre: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registro(formData);
      alert("Registro exitoso");
      navigate("/"); 
    } catch (error) {
      alert("Error en el registro. Intente nuevamente.");
    }
  };

  return (
    <div className="contenido">
      <div className="card-container">
        <div className="register-form">
          <h1>Registrarse</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Nombre completo"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre de Usuario"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Registrarse</button>
          </form>
          <button className="login-button" onClick={() => navigate("/")}>
            Volver al Login
          </button>
        </div>
        <div className="register-image">
       
        </div>
      </div>
    </div>
  );
};

export default Register;
