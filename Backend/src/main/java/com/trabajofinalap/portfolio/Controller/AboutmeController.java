/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Controller;

import com.trabajofinalap.portfolio.Model.Aboutme;
import com.trabajofinalap.portfolio.Service.AboutmeService;
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
public class AboutmeController {
    @Autowired
    private AboutmeService aboutmeService;
    //Listado
    @GetMapping("/aboutme")
    public List<Aboutme> listar()
    {
        return aboutmeService.findAll();
    }
    
    //Guardado
    
    @PostMapping("/aboutme")
    public Aboutme guardar(@RequestBody Aboutme aboutme)
    {
        return aboutmeService.save(aboutme);
    }
    
    @GetMapping("/aboutme/{id}")
    public Aboutme getOneAboutme(@PathVariable Integer id)
    {
        return aboutmeService.findById(id);
    }
    
    //Modificar
    
    @PutMapping("/aboutme/{id}")
    public Aboutme modificar(@RequestBody Aboutme aboutme,@PathVariable Integer id)
    {
        Aboutme editData= aboutmeService.findById(id);
        editData.setName(aboutme.getName());
        editData.setDTexto(aboutme.getDTexto());
        editData.setSkill1(aboutme.getSkill1());
        editData.setSkill2(aboutme.getSkill2());
        editData.setSkill3(aboutme.getSkill3());
        editData.setPercentage1(aboutme.getPercentage1());
        editData.setPercentage2(aboutme.getPercentage2());
        editData.setPercentage3(aboutme.getPercentage3());
        editData.setUrlselfie(aboutme.getUrlselfie());
        editData.setUrlcv(aboutme.getUrlcv());
        editData.setLinkedin(aboutme.getLinkedin());
        editData.setGithub(aboutme.getGithub());
        editData.setMail(aboutme.getMail());
        editData.setPinterest(aboutme.getPinterest());
        editData.setPCompletados(aboutme.getPCompletados());
        editData.setCTomados(aboutme.getCTomados());
        editData.setCSatisfactorios(aboutme.getCSatisfactorios());
        editData.setPremios(aboutme.getPremios());
        
        return aboutmeService.save(editData);
    }
    
    @DeleteMapping("/aboutme/{id}")
    public void eliminar(@PathVariable Integer id)
    {
        aboutmeService.delete(id);
    }
}
