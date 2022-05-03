/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Service;

import com.trabajofinalap.portfolio.Dao.AboutmeDao;
import com.trabajofinalap.portfolio.Model.Aboutme;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Z3belek
 */
@Service
public class AboutmeServiceImplement  implements AboutmeService{
    @Autowired
    private AboutmeDao aboutmeDao;
    
    @Override
    @Transactional(readOnly=true)
    public List<Aboutme> findAll()
    {
        return (List<Aboutme>) aboutmeDao.findAll();
    }
    
    @Override
    @Transactional(readOnly=false)
    public Aboutme save(Aboutme aboutme)
    {
        return aboutmeDao.save(aboutme);
    }
    
    @Override
     @Transactional(readOnly=true)
    public Aboutme findById(Integer id)
    {
        return aboutmeDao.findById(id).orElse(null);
    }
    
    @Override
     @Transactional(readOnly=false)
    public void delete(Integer id)
    {
        aboutmeDao.deleteById(id);
    }
    
}