/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Controller;

import com.trabajofinalap.portfolio.Model.Education;
import com.trabajofinalap.portfolio.Service.EducationService;
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
@RequestMapping("/api")
public class EducationController {
    @Autowired
    private EducationService educationService;
    //Listado
    @GetMapping("/education")
    public List<Education> listar()
    {
        return educationService.findAll();
    }
    
    //Guardado
    
    @PostMapping("/education")
    public Education guardar(@RequestBody Education education)
    {
        return educationService.save(education);
    }
    
    @GetMapping("/education/{id}")
    public Education getOneEducation(@PathVariable Integer id)
    {
        return educationService.findById(id);
    }
    
    //Modificar
    
    @PutMapping("/education/{id}")
    public Education modificar(@RequestBody Education education,@PathVariable Integer id)
    {
        Education editData= educationService.findById(id);
        editData.setYear1(education.getYear1());
        editData.setYear2(education.getYear2());
        editData.setLevel(education.getLevel());
        editData.setPlace(education.getPlace());
        editData.setDTexto(education.getDTexto());
        
        return educationService.save(editData);
    }
    
    @DeleteMapping("/education/{id}")
    public void eliminar(@PathVariable Integer id)
    {
        educationService.delete(id);
    }
}
