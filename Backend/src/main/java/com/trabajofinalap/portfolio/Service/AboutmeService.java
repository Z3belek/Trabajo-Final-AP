/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.trabajofinalap.portfolio.Service;

import com.trabajofinalap.portfolio.Model.Aboutme;
import java.util.List;

/**
 *
 * @author Z3belek
 */
public interface AboutmeService {
    public List<Aboutme> findAll();
    public Aboutme save(Aboutme aboutme);
    public Aboutme findById(Integer id);
    public void delete(Integer id);
    
}
