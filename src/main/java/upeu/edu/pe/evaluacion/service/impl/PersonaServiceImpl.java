/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package upeu.edu.pe.evaluacion.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import upeu.edu.pe.evaluacion.entity.Persona;
import upeu.edu.pe.evaluacion.repository.PersonaRepository;
import upeu.edu.pe.evaluacion.service.PersonaService;


/**
 *
 * @author Lenovo
 */

@Service
public class PersonaServiceImpl implements PersonaService {
   
@Autowired
    private PersonaRepository personaRepository;

    @Transactional(readOnly = true)
    public List<Persona> findAll() {
        return (List<Persona>) personaRepository.findAll();
    }

    @Override
    public Persona findById(Long id) {
        return personaRepository.findById(id).orElse(null);
    }

    @Override
    public Persona save(Persona persona) {
        return personaRepository.save(persona);
    }

    @Override
    public void delete(Persona persona) {
        personaRepository.delete(persona);
    }

    @Override
    public void deleteById(Long id) {
        personaRepository.deleteById(id);
    } 
}
