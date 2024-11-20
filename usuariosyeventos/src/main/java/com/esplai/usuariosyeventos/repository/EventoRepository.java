package com.esplai.usuariosyeventos.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.esplai.usuariosyeventos.models.Evento;

public interface EventoRepository extends CrudRepository<Evento, Integer> {
	
	  public List<Evento> findAll();
}
