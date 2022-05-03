/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Service;

import com.trabajofinalap.portfolio.Dao.ExperienceDao;
import com.trabajofinalap.portfolio.Model.Experience;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Z3belek
 */
@Service
public class ExperienceServiceImplement  implements ExperienceService{
    @Autowired
    private ExperienceDao experienceDao;
    
    @Override
    @Transactional(readOnly=true)
    public List<Experience> findAll()
    {
        return (List<Experience>) experienceDao.findAll();
    }
    
    @Override
    @Transactional(readOnly=false)
    public Experience save(Experience experience)
    {
        return experienceDao.save(experience);
    }
    
    @Override
     @Transactional(readOnly=true)
    public Experience findById(Integer id)
    {
        return experienceDao.findById(id).orElse(null);
    }
    
    @Override
     @Transactional(readOnly=false)
    public void delete(Integer id)
    {
        experienceDao.deleteById(id);
    }
    
}