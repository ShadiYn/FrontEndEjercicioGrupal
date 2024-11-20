package com.esplai.usuariosyeventos.maincontroler;

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

@CrossOrigin // Para hacer peticiones desde otro servidor
@RestController // Para hacer peticiones REST
@RequestMapping("/cosas")
public class MainController {

	//@Autowired
	//private LibroRepository libroRepository;

	/*
	@PostMapping("/create")
	public void createLibro(@RequestBody Libro libro) {
		libroRepository.save(libro);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteLibro(@PathVariable("id") Integer id) {
		Libro i = new Libro();
		i.setLibroId(id);
		libroRepository.delete(i);
	}

	@GetMapping("/libros")
	public List<Libro> getLibros() {
		List<Libro> people = libroRepository.findAll();
		return people;
	}

	@GetMapping("/libros/{id}")
	public Libro getLibrosById(@PathVariable("id") Integer id) {
		Libro juga = libroRepository.findLibroByLibroId(id);
		return juga;
	}

	@PutMapping("/update")
	public void updateLibro(@RequestBody Libro libro) {
		libro.setLibroId(libro.getLibroId());
		libroRepository.save(libro);
	}

*/
}