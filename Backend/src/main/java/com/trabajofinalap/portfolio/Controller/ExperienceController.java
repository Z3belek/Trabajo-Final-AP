/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Controller;

import com.trabajofinalap.portfolio.Model.Experience;
import com.trabajofinalap.portfolio.Service.ExperienceService;
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

/**
 *
 * @author Z3belek
 */
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/data/all")
public class ExperienceController {
    @Autowired
    private ExperienceService experienceService;
    //Listado
    @GetMapping("/experience")
    public List<Experience> listar()
    {
        return experienceService.findAll();
    }
    
    //Guardado
    
    @PostMapping("/experience")
    public Experience guardar(@RequestBody Experience experience)
    {
        return experienceService.save(experience);
    }
    
    @GetMapping("/experience/{id}")
    public Experience getOneExperience(@PathVariable Integer id)
    {
        return experienceService.findById(id);
    }
    
    //Modificar
    @PutMapping("/experience/{id}")
    public Experience modificar(@RequestBody Experience experience, @PathVariable Integer id)
    {
        Experience experienceActual= experienceService.findById(id);
        experienceActual.setYear1(experience.getYear1());
        experienceActual.setYear2(experience.getYear2());
        experienceActual.setRole(experience.getRole());
        experienceActual.setPlace(experience.getPlace());
        experienceActual.setDTexto(experience.getDTexto());
        
        return experienceService.save(experienceActual);
    }
    
    @DeleteMapping("/experience/{id}")
    public void eliminar(@PathVariable Integer id)
    {
        experienceService.delete(id);
    }
}
