package com.esplai.usuariosyeventos.maincontroler;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esplai.usuariosyeventos.models.Evento;
import com.esplai.usuariosyeventos.models.Usuario;
import com.esplai.usuariosyeventos.repository.EventoRepository;

@CrossOrigin // Para hacer peticiones desde otro servidor
@RestController // Para hacer peticiones REST
@RequestMapping("/cosas")
public class MainController {

	@Autowired
	private EventoRepository eventoRepository;

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

	@PostMapping("/createUser")
	public void createUser(@RequestBody String[] things) {
		LocalDate date = LocalDate.parse(things[4]);
		/*
		 * String nombre,
		 * 
		 * String apellido,
		 * 
		 * int edad,
		 * 
		 * String biografia,
		 * 
		 * LocalDate nacimiento,
		 * 
		 * String lugarResidencia,
		 * 
		 * String foto
		 */
		Usuario usuario = new Usuario(things[0], things[1], Integer.parseInt(things[2]), things[3], date, things[5],
				things[6]);

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