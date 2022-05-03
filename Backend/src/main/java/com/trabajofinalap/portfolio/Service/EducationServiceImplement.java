/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Service;

import com.trabajofinalap.portfolio.Dao.EducationDao;
import com.trabajofinalap.portfolio.Model.Education;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Z3belek
 */
@Service
public class EducationServiceImplement  implements EducationService{
    @Autowired
    private EducationDao educationDao;
    
    @Override
    @Transactional(readOnly=true)
    public List<Education> findAll()
    {
        return (List<Education>) educationDao.findAll();
    }
    
    @Override
    @Transactional(readOnly=false)
    public Education save(Education education)
    {
        return educationDao.save(education);
    }
    
    @Override
     @Transactional(readOnly=true)
    public Education findById(Integer id)
    {
        return educationDao.findById(id).orElse(null);
    }
    
    @Override
     @Transactional(readOnly=false)
    public void delete(Integer id)
    {
        educationDao.deleteById(id);
    }
    
}