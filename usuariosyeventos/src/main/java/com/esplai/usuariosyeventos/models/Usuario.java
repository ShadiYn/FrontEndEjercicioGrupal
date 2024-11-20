package com.esplai.usuariosyeventos.models;

import java.sql.Date;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nombre;
	private String apellido;
	private int edad;
	private String biografia;
	private Date nacimiento;
	private String lugarresidencia;
	private String foto;
	
}
