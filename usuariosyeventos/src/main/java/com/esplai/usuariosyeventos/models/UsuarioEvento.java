package com.esplai.usuariosyeventos.models;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class UsuarioEvento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Usuario usuarioid;
	private Evento eventoid;
	private List<String> objeto;
	private Boolean completo;
	
}
