import { useState } from 'react';
import { createEvent } from '../apis/api'; // Función para hacer la solicitud de creación del evento

const CrearEventos = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState(null); // Para manejar los errores

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita la recarga de la página

    // Verifica que todos los campos estén llenos
    if (!name || !date || !place || !desc) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const eventData = {
      name,
      date,
      place,
      desc,
    };

    try {
      const response = await createEvent(eventData); // Llama a la función de creación de evento
      if (response) {
        alert('Evento creado con éxito');
        // Aquí puedes redirigir al usuario o limpiar los campos del formulario si lo deseas
      }
    } catch (error) {
      setError('Hubo un error al crear el evento');
      console.error('Error al crear el evento:', error);
    }
  };

  return (
    <div>
      <h2>Crear Evento</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Lugar:</label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Crear Evento</button>
      </form>
    </div>
  );
};

export default CrearEventos;
