package com.esplai.usuariosyeventos.models;

import java.sql.Date;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Evento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nombre;
	private Date fecha;
	private String lugar;
	private UsuarioEvento participantes;
	private String descripcion;
	
}
