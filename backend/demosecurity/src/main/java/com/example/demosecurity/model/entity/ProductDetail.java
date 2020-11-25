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
@Entity(name = "productdetail")
@EntityListeners(AuditingEntityListener.class)
public class ProductDetail implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdProductDetail")
    private long id;
    @ManyToOne
    @JoinColumn(name = "IdProduct")
    private Product product;
    @ManyToOne
    @JoinColumn(name = "IdColor")
    private Color color;
    @ManyToOne
    @JoinColumn(name = "IdSize")
    private Size size;

    private int quantity;
    private int status;

    @CreatedDate
    private Date createdate;
    @Column(length = 50)
    @CreatedBy
    private String createby;

}
