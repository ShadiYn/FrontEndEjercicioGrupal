package com.esplai.usuariosyeventos.utils;

import java.util.List;

import com.esplai.usuariosyeventos.models.Evento;
import com.esplai.usuariosyeventos.models.Usuario;

public class EventoUtils {

	public void AddParticipante(Evento evento, Usuario usuario) {
		List<Usuario> part = evento.getParticipantes();
		part.add(usuario);
		evento.setParticipantes(part);
	}
	public void RemoveParticipante(Evento evento, Usuario usuario) {
		List<Usuario> part = evento.getParticipantes();
		part.remove(usuario);
		evento.setParticipantes(part);
	}
}
