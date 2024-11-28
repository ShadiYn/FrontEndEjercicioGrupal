import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEventById, updateEvent } from "../apis/api";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const data = await fetchEventById(id);
        console.log(111111111111111, data);
        setEvent(data);
      } catch (error) {
        console.log("Error al cargar el evento");
      }
    };
    loadEvent();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateEvent(event);
      navigate("/");
    } catch (error) {
      console.log("No se pudo guardar el evento.");
    }
  };
  if (!event) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <h1>Editar Evento</h1>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={event.nombre}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          Fecha:
          <input
            type="date"
            name="fecha"
            value={event.fecha}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          Lugar:
          <input
            type="text"
            name="lugar"
            value={event.lugar}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          Descripción:
          <textarea
            name="descripcion"
            value={event.descripcion}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <button type="button" onClick={handleSave}>
          Guardar
        </button>
        <br />
        <br />
        <button type="button" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
