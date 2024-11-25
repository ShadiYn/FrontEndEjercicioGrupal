import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllEvents } from "../apis/api";
import "../app/MainMenu.css";

const MainMenu = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchAllEvents();
        setEvents(data);
      } catch (err) {
        setError("No se han podido cargar los eventos...");
      }
    };
    loadEvents();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handlePerfil = () => {
    navigate("/user-profile");
  };

  const handleMisEventos = () => {
    navigate("/public-events");
  };

  const handleUpdateEvent = (id) => {
    navigate(`/edit-event/${id}`);
  };

  return (
    <div className="">
      {/* Navbar */}
      <div className="navbar">
        <button className="button left" onClick={handleMisEventos}>
          Mis eventos
        </button>
        <button className="button right" onClick={handlePerfil}>
          Perfil
        </button>
      </div>

      {/* Título principal */}
      <h1 className="title">Eventos Públicos Disponibles</h1>

      {/* Contenedor de los eventos */}
      <div className="events-container">
        {events.length > 0 ? (
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="card">
                <h2>{event.nombre}</h2>
                <p>
                  <strong>Fecha:</strong> {event.fecha}
                </p>
                <p>
                  <strong>Lugar:</strong> {event.lugar}
                </p>
                <p>
                  <strong>Descripción:</strong> {event.descripcion}
                </p>
                <button onClick={() => handleUpdateEvent(event.id)}>
                  Editar evento
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-events">No hay eventos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default MainMenu;
