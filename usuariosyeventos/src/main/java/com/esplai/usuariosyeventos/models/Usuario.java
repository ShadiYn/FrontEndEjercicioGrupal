package com.esplai.usuariosyeventos.models;

import java.time.LocalDate;

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
	private LocalDate nacimiento;
	private String lugarResidencia;
	private String foto;

	public Usuario(String nombre, String apellido, int edad, String biografia, LocalDate nacimiento,
			String lugarResidencia, String foto) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.biografia = biografia;
		this.nacimiento = nacimiento;
		this.lugarResidencia = lugarResidencia;
		this.foto = foto;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getBiografia() {
		return biografia;
	}

	public void setBiografia(String biografia) {
		this.biografia = biografia;
	}

	public LocalDate getNacimiento() {
		return nacimiento;
	}

	public void setNacimiento(LocalDate nacimiento) {
		this.nacimiento = nacimiento;
	}

	public String getlugarResidencia() {
		return lugarResidencia;
	}

	public void setlugarResidencia(String lugarResidencia) {
		this.lugarResidencia = lugarResidencia;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public int getId() {
		return id;
	}

}
