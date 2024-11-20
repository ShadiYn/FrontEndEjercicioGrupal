package com.esplai.usuariosyeventos.maincontroler;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esplai.usuariosyeventos.models.Evento;
import com.esplai.usuariosyeventos.models.Usuario;
import com.esplai.usuariosyeventos.repository.EventoRepository;
import com.esplai.usuariosyeventos.repository.UsuarioEventoRepository;
import com.esplai.usuariosyeventos.repository.UsuarioRepository;
import com.esplai.usuariosyeventos.utils.EventoUtils;

@CrossOrigin // Para hacer peticiones desde otro servidor
@RestController // Para hacer peticiones REST
@RequestMapping("/cosas")
public class MainController {

	@Autowired
	private EventoRepository eventoRepository;
	@Autowired
	private EventoUtils eventoUtils;
	@Autowired
	private UsuarioRepository usuarioRepository;
	@Autowired
	private UsuarioEventoRepository usuarioEventoRepository;

	@PostMapping(path = "/login")
	public ResponseEntity<String> basicauth(UsernamePasswordAuthenticationToken upa) {
		// El objeto upa tiene información sobre el usuario y la contraseña
		// Si el login ha sido exitoso, a partir de ese momento, desde el front,
		// mandaremos en la cabecera de cada petición el username y password que han
		// provocado que el login sea exitoso
		Usuario u = (Usuario) upa.getPrincipal(); // Si en IntelliJ nos da un error cannot find symbol, significa que no
													// esta pillando el getter de la id
		return ResponseEntity.ok().body("{\"resp\":\"Login exitoso\", \"id\":" + u.getId() + "}");

	}

	@PostMapping("/createEvent")
	public void createEvent(@RequestBody String[] things) {
		LocalDate date = LocalDate.parse(things[1]);
		/*
		 * String nombre,
		 * 
		 * LocalDate fecha,
		 * 
		 * String lugar,
		 * 
		 * String descripcion
		 */
		Evento evento = new Evento(things[0], date, things[2], things[3]);

	}

	@PostMapping("/joinEvent")
	public void postMethodName(@PathVariable("id") int id, @RequestBody String eventName) {
		Usuario usuario = usuarioRepository.findById(id);
		Evento evento = eventoRepository.findByNombre(eventName);
		if (usuario != null && evento != null) {
			eventoUtils.AddParticipante(evento, usuario);
		}
	}

	/*
	 * @DeleteMapping("/delete/{id}") public void deleteLibro(@PathVariable("id")
	 * Integer id) { Libro i = new Libro(); i.setLibroId(id);
	 * libroRepository.delete(i); }
	 * 
	 * @GetMapping("/libros") public List<Libro> getLibros() { List<Libro> people =
	 * libroRepository.findAll(); return people; }
	 * 
	 * @GetMapping("/libros/{id}") public Libro getLibrosById(@PathVariable("id")
	 * Integer id) { Libro juga = libroRepository.findLibroByLibroId(id); return
	 * juga; }
	 * 
	 * @PutMapping("/update") public void updateLibro(@RequestBody Libro libro) {
	 * libro.setLibroId(libro.getLibroId()); libroRepository.save(libro); }
	 * 
	 */
}