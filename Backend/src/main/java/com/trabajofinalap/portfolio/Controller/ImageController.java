/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.trabajofinalap.portfolio.Controller;

import com.trabajofinalap.portfolio.Dao.ImageDao;
import com.trabajofinalap.portfolio.Model.Imagen;
import com.trabajofinalap.portfolio.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
/**
 *
 * @author Z3belek
 */
@RestController
//@CrossOrigin(origins = "http://localhost:8082") open for specific port
@CrossOrigin() // open for all ports
public class ImageController {
    @Autowired
    ImageDao imageRepository;

    @PostMapping("/upload/image")
    public ResponseEntity<ImageUploadResponse> uplaodImage(@RequestParam("image") MultipartFile file)
            throws IOException {

        imageRepository.save(Imagen.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .image(ImageService.compressImage(file.getBytes())).build());
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("Image uploaded successfully: " +
                        file.getOriginalFilename()));
    }

    @GetMapping(path = {"/get/image/info/{name}"})
    public Imagen getImageDetails(@PathVariable("name") String name) throws IOException {

        final Optional<Imagen> dbImage = imageRepository.findByName(name);

        return Imagen.builder()
                .name(dbImage.get().getName())
                .type(dbImage.get().getType())
                .image(ImageService.decompressImage(dbImage.get().getImage())).build();
    }

    @GetMapping(path = {"/get/image/{name}"})
    public ResponseEntity<byte[]> getImage(@PathVariable("name") String name) throws IOException {

        final Optional<Imagen> dbImage = imageRepository.findByName(name);

        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageService.decompressImage(dbImage.get().getImage()));
    }
}