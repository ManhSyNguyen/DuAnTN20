package com.example.demosecurity.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity(name = "supplier")
public class Supplier implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_supplier")
    private long Id;
    private String NameSupplier;
    private String Titile;
    private String Address;
    private boolean status;
    @CreatedDate
    private String createdate;
    @CreatedBy
    private String createby;

}
