package com.example.demosecurity.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Entity(name = "size")
@EntityListeners(AuditingEntityListener.class)
public class Size implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdSize")
    private long id;
    @Column(name = "namesize",columnDefinition = "VARCHAR(40)  NULL")
    private String namesize;

    private  boolean status;
    @CreatedDate
    private Date createdate;

    @Column(name = "createby",columnDefinition = "VARCHAR(40)  NULL")
    @CreatedBy
    private String createby;
    @OneToMany
    @JoinColumn(name = "IdColor")
    private Set<ProductDetail> ProductDetail;
}
