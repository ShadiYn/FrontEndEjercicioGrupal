import axios from 'axios';

// Crear una instancia de axios con la URL base
const i = axios.create({
    baseURL: 'http://localhost:8080/cosas'
});

// Función de login
export const login = async ({ username, password }) => {
    // Generar token de autenticación
    const token = btoa(username + ':' + password);

    // Log para ver el token generado
    console.log('Generando token para login:', token);

    try {
        // Log para verificar los datos enviados
        console.log('Realizando solicitud POST para login a /login con los encabezados: ', {
            'Authorization': 'Basic ' + token,
            'Content-Type': 'application/json'
        });

        // Realizar la solicitud POST para login
        const response = await i.post('/login', {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + token
            }
        });

        // Log para ver la respuesta del login
        console.log('Respuesta del login:', response.data);

        // Guardar el token en la configuración de axios para futuras solicitudes
        setAuth(token);

        return response.data;  // Retorna la respuesta del login (por ejemplo, token o mensaje)
    } catch (error) {
        // Log de error si la solicitud falla
        console.error('Error al hacer login:', error.response ? error.response.data : error.message);
        throw error;  // Lanzar el error para que pueda ser manejado en el componente
    }
}

// Función para configurar el token de autenticación en axios
const setAuth = async (token) => {
    console.log('Configurando autorización con token:', token);
    i.defaults.headers.common.Authorization = `Basic ${token}`;
};

// Función de registro (solo para referencia)
export const registro = async (formData) => {
  try {
    // Log para mostrar los datos de registro
    console.log("Enviando datos de registro: ", formData);

    const response = await axios.post('http://localhost:8080/cosas/register', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Log para la respuesta exitosa del registro
    console.log('Registro exitoso', response.data);
    return response.data;
  } catch (error) {
    // Log para error al registrar
    console.error('Error al registrar usuario:', error);
    throw error;
  }
};

export const fetchAllEvents = async () => {
  try {
    const response = await i.get('/checkAllEvents');
    return response.data;
  } catch (error) {
    console.error("Error al cargar los eventos:", error.response || error.message);
    throw error;
  }
};

export const fetchEventById = async (id) => {
  try {
    const response = await i.get(`/getEventById/${id}`);
    return response.data;
  } catch (error) {
    console.error("No se ha podido obtener el evento");
    throw error;
  }
}

export const updateEvent = async (obj) => {
  try {
    console.log("Event", obj)
    const response = await i.put('/editEvent', obj);
    return response;
    
  } catch (error) {
    console.error("Error al editar el evento:", error.response || error.message);
    throw error;
  }
}

export const createEvent = async (eventData) => {
    const token = localStorage.getItem('authToken');  // Recupera el token desde localStorage
    
    console.log('Token recuperado para crear evento:', token);  // Verifica el token recuperado

    if (!token) {
        console.error('No se encontró el token en localStorage');  // Si no se encuentra el token
        return;  // Detener la ejecución si el token no está presente
    }

    try {
        const response = await axios.post('http://localhost:8080/cosas/createEvent', eventData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`, // Enviar el token en el encabezado Authorization
            },
        });

        console.log('Evento creado:', response.data); // Log de la respuesta
        return response.data; // Retorna la respuesta si la solicitud fue exitosa
    } catch (error) {
        console.error('Error al crear el evento:', error.response ? error.response.data : error.message);
        throw error; // Lanzar el error para ser manejado en el componente
    }
};


