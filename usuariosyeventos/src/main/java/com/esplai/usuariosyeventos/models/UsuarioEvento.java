package com.esplai.usuariosyeventos.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

public class UsuarioEvento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@OneToOne
	private Usuario usuarioid;
	@OneToOne
	private Evento eventoid;
	@ManyToOne
	private Objeto objetos;
	
	private Boolean completo;
	
}
