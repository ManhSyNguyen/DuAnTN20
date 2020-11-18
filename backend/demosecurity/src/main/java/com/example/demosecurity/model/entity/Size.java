package com.example.demosecurity.model.entity;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Size implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Size")
    private long id;
    private String namesize;
    private  boolean status;
    @CreatedDate
    private String createdate;
    @CreatedBy
    private String createby;

}
