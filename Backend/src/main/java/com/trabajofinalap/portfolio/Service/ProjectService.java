/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.trabajofinalap.portfolio.Service;

import com.trabajofinalap.portfolio.Model.Project;
import java.util.List;

/**
 *
 * @author Z3belek
 */
public interface ProjectService {
    public List<Project> findAll();
    public Project save(Project project);
    public Project findById(Integer id);
    public void delete(Integer id);
    
}
