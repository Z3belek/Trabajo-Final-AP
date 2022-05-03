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
@Table(name="Zz_project")
public class Project {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="Id")
    private Integer Id;
    @Column(name="Title")
    private String Title;
    @Column(name="Type")
    private String Type;
    @Column(name="Place")
    private String Place;
    @Column(name="DTexto")
    private String DTexto;
    @Column(name="Imgurl")
    private String Imgurl;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String Title) {
        this.Title = Title;
    }

    public String getType() {
        return Type;
    }

    public void setType(String Type) {
        this.Type = Type;
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

    public String getImgurl() {
        return Imgurl;
    }

    public void setImgurl(String Imgurl) {
        this.Imgurl = Imgurl;
    }
    
}
