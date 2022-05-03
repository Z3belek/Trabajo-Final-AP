/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Z3belek
 */
@Entity
@Table(name="Zz_experience")
public class Experience {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="Id")
    private Integer Id;
    @Column(name="Year1")
    private Integer Year1;
    @Column(name="Year2")
    private Integer Year2;
    @Column(name="Role")
    private String Role;
    @Column(name="Place")
    private String Place;
    @Column(name="DTexto")
    private String DTexto;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public Integer getYear1() {
        return Year1;
    }

    public void setYear1(Integer Year1) {
        this.Year1 = Year1;
    }

    public Integer getYear2() {
        return Year2;
    }

    public void setYear2(Integer Year2) {
        this.Year2 = Year2;
    }

    public String getRole() {
        return Role;
    }

    public void setRole(String Role) {
        this.Role = Role;
    }

    public String getPlace() {
        return Place;
    }

    public void setPlace(String Place) {
        this.Place = Place;
    }

    public String getDTexto() {
        return DTexto;
    }

    public void setDTexto(String DTexto) {
        this.DTexto = DTexto;
    }
    
}
