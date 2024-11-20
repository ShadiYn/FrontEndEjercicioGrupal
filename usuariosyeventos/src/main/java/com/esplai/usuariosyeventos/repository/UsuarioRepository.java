package com.esplai.usuariosyeventos.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.esplai.usuariosyeventos.models.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
	
	  public List<Usuario> findAll();
}
