/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.trabajofinalap.portfolio.Dao;

import com.trabajofinalap.portfolio.Model.Project;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Z3belek
 */
public interface ProjectDao extends CrudRepository<Project, Integer>{
    
}
