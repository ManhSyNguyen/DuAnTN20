package com.example.demosecurity.model.entity;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "category")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_category")
    private long id;
    private String name;
    private boolean status;
    @CreatedDate
    private String createdate;
    @CreatedBy
    private String createby;

}