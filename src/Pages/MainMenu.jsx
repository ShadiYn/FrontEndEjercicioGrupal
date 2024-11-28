import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllEvents, deleteEvent } from "../apis/api";
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

<<<<<<< HEAD
  const handleCreateEvent = ()=>{
    navigate('/createEvent');
  }
=======
  const handleDeleteEvent = (id) => {
    deleteEvent(id);
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };
>>>>>>> a08f64e718fe348e66a4ff332acf2fda143bb2d9
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
      <button onClick={handleCreateEvent}>AñadirEvento</button>

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
                <br />
                <button onClick={() => handleDeleteEvent(event.id)}>
                  Eliminar evento
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
