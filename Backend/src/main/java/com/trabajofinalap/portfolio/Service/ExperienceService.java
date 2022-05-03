/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.trabajofinalap.portfolio.Service;

import com.trabajofinalap.portfolio.Model.Experience;
import java.util.List;

/**
 *
 * @author Z3belek
 */
public interface ExperienceService {
    public List<Experience> findAll();
    public Experience save(Experience experience);
    public Experience findById(Integer id);
    public void delete(Integer id);
    
}