package com.example.demosecurity.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity(name = "supplier")
@EntityListeners(AuditingEntityListener.class)
public class Supplier  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdSupplier")
    private long Id;
    private String NameSupplier;
    private String Titile;
    private String Address;
    private boolean status;
    @CreatedDate
    private Date createdate;
    @CreatedBy
    private String createby;

}
