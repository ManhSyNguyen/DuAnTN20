package com.example.demosecurity.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;
@Getter
@Setter
@Entity(name = "customer")
public class Customer implements Serializable {
    @Id
    @Column(name="Id_customer")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String Name;
    private String email;
    private String username;
    private String password;
    private Boolean status;
    @CreatedDate
    private String createdate;
    @CreatedBy
    private String createby;

    public Customer() {
    }
}
