/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Controller;

import com.trabajofinalap.portfolio.Model.Project;
import com.trabajofinalap.portfolio.Service.ProjectService;
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
public class ProjectController {
    @Autowired
    private ProjectService projectService;
    //Listado
    @GetMapping("/project")
    public List<Project> listar()
    {
        return projectService.findAll();
    }
    
    //Guardado
    
    @PostMapping("/project")
    public Project guardar(@RequestBody Project project)
    {
        return projectService.save(project);
    }
    
    @GetMapping("/project/{id}")
    public Project getOneProject(@PathVariable Integer id)
    {
        return projectService.findById(id);
    }
    
    //Modificar
    
    @PutMapping("/project/{id}")
    public Project modificar(@RequestBody Project project,@PathVariable Integer id)
    {
        Project editData= projectService.findById(id);
        editData.setTitle(project.getTitle());
        editData.setType(project.getType());
        editData.setPlace(project.getPlace());
        editData.setDTexto(project.getDTexto());
        editData.setImgurl(project.getImgurl());
        
        return projectService.save(editData);
    }
    
    @DeleteMapping("/project/{id}")
    public void eliminar(@PathVariable Integer id)
    {
        projectService.delete(id);
    }
}
