/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.trabajofinalap.portfolio.Service;

import com.trabajofinalap.portfolio.Model.Education;
import java.util.List;

/**
 *
 * @author Z3belek
 */
public interface EducationService {
    public List<Education> findAll();
    public Education save(Education education);
    public Education findById(Integer id);
    public void delete(Integer id);
    
}
